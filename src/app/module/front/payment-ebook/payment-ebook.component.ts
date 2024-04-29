import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-ebook',
  templateUrl: './payment-ebook.component.html',
  styleUrls: ['./payment-ebook.component.scss']
})
export class PaymentEbookComponent {

  userData: any = {}
  checkoutData: any
  bookTransactionId: any;
  bookTransactionData: any = {};
  quantity: number = 0;
  quantityWeight: number = 0;
  bookWeight: number = 0.25;
  shippingVendor: string = "";
  priceTotal: number = 0;
  priceNormal: number = 0;
  priceShipping: number = 0;
  priceDiscount: number = 0;

  constructor(
    private readonly router: Router,
    public authService: AuthService,
    public bookService: BookService
  ){}

  ngOnInit():void{
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
     // get respons from local storage
    let checkoutResponse = localStorage.getItem('checkoutResponse');
    if (checkoutResponse) {
      this.checkoutData = JSON.parse(checkoutResponse);
      let checkoutQuantityResponse = localStorage.getItem('checkoutQuantityResponse');
      if (checkoutQuantityResponse) {
        this.quantity = Number(checkoutQuantityResponse);
      } else {
        this.quantity = 1;
      }
      this.priceShipping = this.checkoutData.data.bookPriceShipping;
      this.priceDiscount = this.checkoutData.data.bookPrice * (this.checkoutData.data.bookDiscount / 100) * this.quantity;
      this.priceNormal = this.checkoutData.data.bookPrice * this.quantity;
      this.priceTotal = (this.checkoutData.data.bookPrice * this.quantity) - this.priceDiscount + this.priceShipping ;
      this.shippingVendor = this.checkoutData.data.bookShippingVendor;
    }
  }

  addShipping(bookTransactionId: any) {
    if (this.authService.isLogin()) {
      localStorage.setItem('bookTransactionId', bookTransactionId);
      this.router.navigate(["transaction-checkout-shipping"])
      .then(() => {
        window.location.reload();
      });
    } else {
      // Jika pengguna belum login, arahkan ke halaman login
      this.router.navigate(['login']);
    }
  }
  
  addPaymentMethod(bookTransactionId: any) {
    if (this.authService.isLogin()) {
      localStorage.setItem('bookTransactionId', bookTransactionId);
      this.router.navigate(["transaction-checkout-payment"])
      .then(() => {
        window.location.reload();
      });
    } else {
      // Jika pengguna belum login, arahkan ke halaman login
      this.router.navigate(['login']);
    }
  }

  checkoutTransaction(bookTransactionId: any) {
    this.bookService.getDetailBookTransaction(bookTransactionId).subscribe(
      (response) => {
        this.bookTransactionData = response.data;
        if (this.bookTransactionData.bookShippingStatus == "Yes" && this.bookTransactionData.bookTransactionPaymentStatus == "Yes") {
      
          const params = new HttpParams()
          .set('userId', this.bookTransactionData.userId)
          .set('firstName', this.bookTransactionData.bookReceiptName)
          .set('lastName', this.bookTransactionData.bookReceiptName)
          .set('email', this.bookTransactionData.bookReceiptEmail)
          .set('phoneNumber', this.bookTransactionData.bookReceiptPhone)
          .set('bookTransactionCode', this.bookTransactionData.bookTransactionCode)
          .set('amount', this.priceTotal);

          this.bookService.checkoutBookTransacion(params).subscribe(
            (response) => {
              window.location = response.data.url;
             },
            (error) => {
              console.log("error 1");
            }
          )
        } else {
          Swal.fire({
            title: "Shipping address or payment method required",
            text: "Please fill the form.",
            icon: "info"
          });
        }
       },
      (error) => {
        console.log("error 2");
      }
    )
  }

  formatDate(dateString: string): string {
    // Parsing tanggal dari string dalam format "yyyy/mm/dd"
    const parts = dateString.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
  
    // Membuat objek Date JavaScript
    const date = new Date(year, month - 1, day);
  
    // Mengambil tanggal, bulan, dan tahun
    const dayOfMonth = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[date.getMonth()];
    const yearNumber = date.getFullYear();
  
    // Menggabungkan informasi tersebut dalam format yang diinginkan
    return `${dayOfMonth} ${monthName} ${yearNumber}`;
  }

  logout() {
    this.authService.logOut()
  }

  goBack(): void {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  updateQuantity() {
  }

  increaseQuantity() {
    if (this.quantity < 100) {
      this.quantity++;
      this.quantityWeight = 0;
      localStorage.setItem('checkoutQuantityResponse', JSON.stringify(this.quantity));
    }

    if (this.shippingVendor == "jne-local") {
      this.quantityWeight = this.bookWeight * this.quantity;
    } else if (this.shippingVendor == "jne-international") {
      if (this.quantity % 2 == 0) {
        this.quantityWeight = this.bookWeight * this.quantity;
      } else {
        this.quantityWeight = (this.bookWeight * this.quantity) + 0.25;
      }
      this.getShippingRateJNEInternational();
    }

    this.priceDiscount = this.checkoutData.data.bookPrice * (this.checkoutData.data.bookDiscount / 100) * this.quantity;
    this.priceNormal = this.checkoutData.data.bookPrice * this.quantity;
    this.priceTotal = (this.checkoutData.data.bookPrice * this.quantity) - this.priceDiscount + this.priceShipping ;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityWeight = 0;
      localStorage.setItem('checkoutQuantityResponse', JSON.stringify(this.quantity));
    }

    if (this.shippingVendor == "jne-local") {
      this.quantityWeight = this.bookWeight * this.quantity;
    } else if (this.shippingVendor == "jne-international") {
      if (this.quantity % 2 == 0) {
        this.quantityWeight = this.bookWeight * this.quantity;
      } else {
        this.quantityWeight = (this.bookWeight * this.quantity) + 0.25;
      }
      this.getShippingRateJNEInternational();
    }

    this.priceDiscount = this.checkoutData.data.bookPrice * (this.checkoutData.data.bookDiscount / 100) * this.quantity;
    this.priceNormal = this.checkoutData.data.bookPrice * this.quantity;
    this.priceTotal = (this.checkoutData.data.bookPrice * this.quantity) - this.priceDiscount + this.priceShipping;
  }

  getShippingRateJNEInternational() {
    this.bookService.getShippingRateJNEInternational(this.checkoutData.data.bookTransactionCode, "1", this.checkoutData.data.bookShippingCountry, this.quantityWeight).subscribe(
      (response: any) => {
        this.priceShipping = response.rate.rates;
       },
      (error) => {
      }
    )
  }

  getShippingRateJNELocal() {
    // this.bookService.getShippingRateJNELocal(this.bookTransactionId, this.checkoutData.data.bookShippingCountry, this.quantityWeight).subscribe(
    //   (response) => {

    //     },
    //   (error) => {
    //   }
    // )
  }

}
