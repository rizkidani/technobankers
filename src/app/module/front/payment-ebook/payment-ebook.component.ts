import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-payment-ebook',
  templateUrl: './payment-ebook.component.html',
  styleUrls: ['./payment-ebook.component.scss']
})
export class PaymentEbookComponent {

  userData: any = {}

  constructor(
    public authService: AuthService
  ){}

  ngOnInit():void{
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
      console.log(this.userData)
    }
  }

  logout() {
    this.authService.logOut()
  }

  goBack(): void {
    window.history.back();
  }

}
