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
  {
    path: 'transaction-checkout-shipping',
    loadChildren: () => import('../app/module/front/payment-ebook-shipping/payment-ebook-shipping.module').then((x) => x.PaymentEbookShippingModule)
  },
  {
    path: 'transaction-checkout-payment',
    loadChildren: () => import('../app/module/front/payment-ebook-payment/payment-ebook-payment.module').then((x) => x.PaymentEbookPaymentModule)
  },
  {
    path: 'register-invalid',
    loadChildren: () => import('../app/module/front/register-expired/register-expired.module').then((x) => x.RegisterExpiredModule)
  },
  {
    path: 'our-library',
    loadChildren: () => import('../app/module/front/our-library/our-library.module').then((x) => x.OurLibraryModule)
  },
  {
    path: 'detail-book/:id',
    loadChildren: () => import('../app/module/front/detail-book/detail-book.module').then((x) => x.DetailBookModule)
  },
  {
    path: 'pdf-not-found',
    loadChildren: () => import('../app/module/front/pdf-not-found/pdf-not-found.module').then((x) => x.PdfNotFoundModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../app/module/front/about/about.module').then((x) => x.AboutModule)
  },
  {
    path: 'event',
    loadChildren: () => import('../app/module/front/event/event.module').then((x) => x.EventModule)
  },
  {
    path:'upcoming-event',
    loadChildren: () => import('../app/module/front/upcoming-event/upcoming-event.module').then((x) => x.UpcomingEventModule)
  },
  {
    path:'leave-review/:id',
    loadChildren: () => import('../app/module/front/leave-review/leave-review.module').then((x) => x.LeaveReviewModule)
  },
  {
    path:'detail-book-read',
    loadChildren: () => import('../app/module/front/detail-book-read/detail-book-read.module').then((x) => x.DetailBookReadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
