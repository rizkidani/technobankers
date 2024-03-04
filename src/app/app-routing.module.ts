import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('../app/core/core.module').then((x) => x.CoreModule)
  },
  {
    path:'login',
    loadChildren: () => import('../app/module/front/login/login.module').then((x) => x.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/module/front/register/register.module').then((x) => x.RegisterModule)
  },
  {
    path: 'email-verification',
    loadChildren: () => import('../app/module/front/verification-email/verification-email.module').then((x) => x.VerificationEmailModule)
  },
  {
    path: 'transaction-checkout',
    loadChildren: () => import('../app/module/front/payment-ebook/payment-ebook.module').then((x) => x.PaymentEbookModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
