import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurLibraryComponent } from './our-library.component';
import { DetailBookComponent } from '../detail-book/detail-book.component';

const routes: Routes = [
  {
    path: '',
    component: OurLibraryComponent
  },
  {
    path: "detail-book/:id",
    component: DetailBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurLibraryRoutingModule { }
