import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-payment-ebook',
  templateUrl: './payment-ebook.component.html',
  styleUrls: ['./payment-ebook.component.scss']
})
export class PaymentEbookComponent {

  userData: any = {}
  checkoutData: any
  bookTransactionId: any;

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
    console.log(this.checkoutData);
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
