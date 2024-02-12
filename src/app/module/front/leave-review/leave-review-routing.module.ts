import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveReviewComponent } from './leave-review.component';

const routes: Routes = [
  {
    path:'',
    component: LeaveReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveReviewRoutingModule { }
