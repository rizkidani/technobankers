import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path:'',
    component: CoreComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('../module/front/home/home.module').then((x) => x.HomeModule)
      },
      {
        path:'public-training',
        loadChildren: () => import('../module/front/training/training.module').then((x) => x.TrainingModule)
      },
      {
        path:'corporate-training',
        loadChildren: () => import('../module/front/corporate-training/corporate-training.module').then((x) => x.CorporateTrainingModule)
      },
      {
        path:'dia',
        loadChildren: () => import('../module/front/dia/dia.module').then((x) => x.DiaModule)
      },
      {
        path:'e-book',
        loadChildren: () => import('../module/front/e-book/e-book.module').then((x) => x.EBookModule)
      },
      {
        path:'detail-corporate-training',
        loadChildren: () => import('../module/front/detail-corporate-training/detail-corporate-training.module').then((x) => x.DetailCorporateTrainingModule)
      },
      {
        path:'list-corporate-training',
        loadChildren: () => import('../module/front/list-corporate-training/list-corporate-training.module').then((x) => x.ListCorporateTrainingModule)
      },
      {
        path: 'our-library',
        loadChildren: () => import('../module/front/our-library/our-library.module').then((x) => x.OurLibraryModule)
      },
      {
        path: 'detail-book/:id',
        loadChildren: () => import('../module/front/detail-book/detail-book.module').then((x) => x.DetailBookModule)
      },
      {
        path: 'pdf-not-found',
        loadChildren: () => import('../module/front/pdf-not-found/pdf-not-found.module').then((x) => x.PdfNotFoundModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../module/front/about/about.module').then((x) => x.AboutModule)
      },
      {
        path: 'event',
        loadChildren: () => import('../module/front/event/event.module').then((x) => x.EventModule)
      },
      {
        path:'upcoming-event',
        loadChildren: () => import('../module/front/upcoming-event/upcoming-event.module').then((x) => x.UpcomingEventModule)
      },
      {
        path:'leave-review/:id',
        loadChildren: () => import('../module/front/leave-review/leave-review.module').then((x) => x.LeaveReviewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
