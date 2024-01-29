import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { EventDetailOrderComponent } from '../event-detail-order/event-detail-order.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: 'detail/:id',
    component: EventDetailComponent
  },
  {
    path: 'detail/:id/order',
    component: EventDetailOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
