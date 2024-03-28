import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-ebook-transaction-status',
  templateUrl: './payment-ebook-transaction-status.component.html',
  styleUrls: ['./payment-ebook-transaction-status.component.scss']
})
export class PaymentEbookTransactionStatusComponent {
  bookModel = new BookModel;
  bookTransactionId: any;
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

    // get respons from local storage
    let bookTransactionId = localStorage.getItem('bookTransactionId');
    if (bookTransactionId) {
      this.bookTransactionId = JSON.parse(bookTransactionId);
    }

    this.bookService.getDetailBookTransaction(this.bookTransactionId).subscribe(
      (response) => {
        this.bookTransactionData = response.data;
       },
      (error) => {
      }
    )
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
