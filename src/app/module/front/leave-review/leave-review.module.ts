import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveReviewRoutingModule } from './leave-review-routing.module';
import { LeaveReviewComponent } from './leave-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    LeaveReviewComponent
  ],
  imports: [
    CommonModule,
    LeaveReviewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
  ]
})
export class LeaveReviewModule { }
