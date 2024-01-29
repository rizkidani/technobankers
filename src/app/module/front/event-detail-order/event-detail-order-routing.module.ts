import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailOrderComponent } from './event-detail-order.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailOrderRoutingModule { }
