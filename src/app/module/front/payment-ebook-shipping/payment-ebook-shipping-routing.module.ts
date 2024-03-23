import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentEbookShippingComponent } from './payment-ebook-shipping.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentEbookShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentEbookShippingRoutingModule { }
