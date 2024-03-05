import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterExpiredRoutingModule } from './register-expired-routing.module';
import { RegisterExpiredComponent } from './register-expired.component';


@NgModule({
  declarations: [
    RegisterExpiredComponent
  ],
  imports: [
    CommonModule,
    RegisterExpiredRoutingModule
  ]
})
export class RegisterExpiredModule { }
