import { Component } from '@angular/core';
import { RegisterModel } from '../register/model/register.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent {

  registerModel = new RegisterModel

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // console.log(params)
      this.registerModel.formGroupRegister.controls['userEmail'] = params.data
    })
  }

}
