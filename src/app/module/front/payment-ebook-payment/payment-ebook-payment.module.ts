import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentEbookPaymentRoutingModule } from './payment-ebook-payment-routing.module';
import { PaymentEbookPaymentComponent } from './payment-ebook-payment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    PaymentEbookPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentEbookPaymentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
  ]
})
export class PaymentEbookPaymentModule { }
