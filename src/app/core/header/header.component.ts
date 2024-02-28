import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userData: any = {}

  constructor(
    public authService: AuthService
  ){}

  ngOnInit():void{
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

}
