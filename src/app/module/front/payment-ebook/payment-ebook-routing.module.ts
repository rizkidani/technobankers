import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentEbookComponent } from './payment-ebook.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentEbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentEbookRoutingModule { }
