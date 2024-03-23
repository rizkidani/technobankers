import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-payment-ebook-shipping',
  templateUrl: './payment-ebook-shipping.component.html',
  styleUrls: ['./payment-ebook-shipping.component.scss']
})
export class PaymentEbookShippingComponent {
  bookModel = new BookModel;
  bookTransactionId: any;
  userData: any = {};
  checkoutData: any;

  constructor(
    private readonly router: Router,
    public authService: AuthService,
    public bookService: BookService
  ){}

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    // get respons from local storage
    let bookTransactionId = localStorage.getItem('bookTransactionId');
    if (bookTransactionId) {
      this.bookTransactionId = JSON.parse(bookTransactionId);
    }
  }

  addShippingBook() {
    this.bookModel.formBookShipping.markAllAsTouched();
    this.bookService.checkOutBookShipping(this.bookTransactionId, this.bookModel.formBookShipping.value).subscribe(
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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.bookModel.formBookShipping.controls;
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
