import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-ebook-payment',
  templateUrl: './payment-ebook-payment.component.html',
  styleUrls: ['./payment-ebook-payment.component.scss']
})
export class PaymentEbookPaymentComponent {
  bookModel = new BookModel;
  bookTransactionId: any;
  priceTotal: number = 0;
  priceNormal: number = 0;
  priceShipping: number = 0;
  priceDiscount: number = 0;
  quantity: number = 0;

  checkoutData: any
  userData: any = {};
  bookTransactionData: any = {};

  constructor(
    private readonly router: Router,
    public authService: AuthService,
    public bookService: BookService
  ){}

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    let checkoutQuantityResponse = localStorage.getItem('checkoutQuantityResponse');
    if (checkoutQuantityResponse) {
      this.quantity = Number(checkoutQuantityResponse);
    } else {
      this.quantity = 1;
    }

    let checkoutResponse = localStorage.getItem('checkoutResponse');
    if (checkoutResponse) {
      this.checkoutData = JSON.parse(checkoutResponse);
  
      this.priceShipping = this.checkoutData.data.bookPriceShipping;
      this.priceDiscount = this.checkoutData.data.bookPrice * (this.checkoutData.data.bookDiscount / 100) * this.quantity;
      this.priceNormal = this.checkoutData.data.bookPrice * this.quantity;
      this.priceTotal = (this.checkoutData.data.bookPrice * this.quantity) - this.priceDiscount + this.priceShipping ;
    }

    // get respons from local storage
    let bookTransactionId = localStorage.getItem('bookTransactionId');

    if (bookTransactionId) {
      this.bookTransactionId = JSON.parse(bookTransactionId);
    }

    this.bookService.getDetailBookTransaction(this.bookTransactionId).subscribe(
      (response) => {
        this.bookTransactionData = response.data;
        this.bookModel.formBookPayment.setValue({
          // bookTransactionPaymentCountry: response.data.bookTransactionPaymentCountry, 
          bookTransactionPaymentMethod: response.data.bookTransactionPaymentMethod 
        });
       },
      (error) => {
      }
    )
  }

  addPaymentMethodBook() {
    this.bookModel.formBookPayment.markAllAsTouched();
    if (this.bookModel.formBookPayment.valid) {
      let bookTransactionPaymentCountry: string = "Indonesia"; //hardcode
      this.bookService.checkOutBookPaymentMethod(this.bookTransactionId, bookTransactionPaymentCountry, this.bookModel.formBookPayment.value).subscribe(
        (response) => {
          // Simpan respons ke local storage
          localStorage.setItem('checkoutResponse', JSON.stringify(response));
          this.router.navigate(["transaction-checkout"]);
          setTimeout(() => {
            window.location.reload();
          }, 500);
         },
        (error) => {
        }
      )
    } else {
      Swal.fire({
        title: "Form Payment Method Required",
        text: "Please fill the form payment method.",
        icon: "info"
      });
    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.bookModel.formBookPayment.controls;
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
