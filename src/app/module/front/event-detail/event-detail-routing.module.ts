import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail.component';
import { EventDetailOrderComponent } from '../event-detail-order/event-detail-order.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailRoutingModule { }
