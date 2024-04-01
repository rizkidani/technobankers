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
    }
  }

  addShipping(bookTransactionId: any) {
    if (this.authService.isLogin()) {
      localStorage.setItem('bookTransactionId', bookTransactionId);
      this.router.navigate(["transaction-checkout-shipping"]);
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
          .set('userId', 1111) // hardcode
          .set('firstName', this.bookTransactionData.bookReceiptName)
          .set('lastName', this.bookTransactionData.bookReceiptName)
          .set('email', this.bookTransactionData.bookReceiptEmail)
          .set('phoneNumber', this.bookTransactionData.bookReceiptPhone)
          .set('bookTransactionCode', this.bookTransactionData.bookTransactionCode)
          .set('amount', this.bookTransactionData.bookPriceTotal);

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

}
