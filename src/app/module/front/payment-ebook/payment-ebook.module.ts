import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentEbookRoutingModule } from './payment-ebook-routing.module';
import { PaymentEbookComponent } from './payment-ebook.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentEbookComponent
  ],
  imports: [
    CommonModule,
    PaymentEbookRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PaymentEbookModule { }
