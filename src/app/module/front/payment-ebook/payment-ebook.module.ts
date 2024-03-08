import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentEbookRoutingModule } from './payment-ebook-routing.module';
import { PaymentEbookComponent } from './payment-ebook.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    PaymentEbookComponent
  ],
  imports: [
    CommonModule,
    PaymentEbookRoutingModule,
    SharedModule
  ]
})
export class PaymentEbookModule { }
