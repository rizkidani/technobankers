import { Component } from '@angular/core';
import 'flowbite';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterModel } from '../register/model/register.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registerModel = new RegisterModel;

  constructor(
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService
  ){}

  onLogin() {
    this.authService.loginUser(this.registerModel.formGroupRegister.value).subscribe(
      (response) => {
        this.authService.saveUserData(response.data)
        this.route.navigate([''])
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 500); // Menunggu 500ms sebelum me-refresh halaman
        });
      },
      (error) => {
        this.toastr.error(error.error.message, 'Failed')
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerModel.formGroupRegister.controls;
  }

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      if (passwordInput) {
          passwordInput.type = this.showPassword ? 'text' : 'password';
      }
  }

}
