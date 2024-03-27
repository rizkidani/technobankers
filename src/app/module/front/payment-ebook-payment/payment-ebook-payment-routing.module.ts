import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentEbookPaymentComponent } from './payment-ebook-payment.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentEbookPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentEbookPaymentRoutingModule { }
