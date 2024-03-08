import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterModel } from './model/register.model';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerModel= new RegisterModel;
  show: boolean = true;

  constructor(
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService,
  ){}
  
  registerUser() {
    this.registerModel.formGroupRegister.markAllAsTouched();
    this.authService.registerUser(this.registerModel.formGroupRegister.value).subscribe(
      (response) => {
        this.authService.saveRegisterData(response.data)
        this.route.navigate(['email-verification'], { queryParams: { data: this.registerModel.formGroupRegister.controls['userEmail'].value } })
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
