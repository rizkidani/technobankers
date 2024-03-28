import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentEbookTransactionStatusComponent } from './payment-ebook-transaction-status.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentEbookTransactionStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentEbookTransactionStatusRoutingModule { }
