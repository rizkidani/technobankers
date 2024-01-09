import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/module/front/home/home.module').then((x) => x.HomeModule)
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
