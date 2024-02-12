import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookComponent } from './detail-book.component';
import { LeaveReviewComponent } from '../leave-review/leave-review.component';

const routes: Routes = [
{
  path:'',
  component: DetailBookComponent
},
{
  path: "leave-review/:id",
  component: LeaveReviewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBookRoutingModule { }
