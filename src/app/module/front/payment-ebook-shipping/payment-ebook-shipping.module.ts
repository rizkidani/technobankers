import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentEbookShippingRoutingModule } from './payment-ebook-shipping-routing.module';
import { PaymentEbookShippingComponent } from './payment-ebook-shipping.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    PaymentEbookShippingComponent
  ],
  imports: [
    CommonModule,
    PaymentEbookShippingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
  ]
})
export class PaymentEbookShippingModule { }
