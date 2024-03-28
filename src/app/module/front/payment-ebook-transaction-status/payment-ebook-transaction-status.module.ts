import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentEbookTransactionStatusRoutingModule } from './payment-ebook-transaction-status-routing.module';
import { PaymentEbookTransactionStatusComponent } from './payment-ebook-transaction-status.component';


@NgModule({
  declarations: [
    PaymentEbookTransactionStatusComponent
  ],
  imports: [
    CommonModule,
    PaymentEbookTransactionStatusRoutingModule
  ]
})
export class PaymentEbookTransactionStatusModule { }
