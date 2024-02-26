import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookReadComponent } from './detail-book-read.component';

const routes: Routes = [
  {
    path:'',
    component: DetailBookReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBookReadRoutingModule { }
