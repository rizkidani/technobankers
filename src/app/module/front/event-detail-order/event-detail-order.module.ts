import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailOrderRoutingModule } from './event-detail-order-routing.module';
import { EventDetailOrderComponent } from './event-detail-order.component';


@NgModule({
  declarations: [
    EventDetailOrderComponent
  ],
  imports: [
    CommonModule,
    EventDetailOrderRoutingModule
  ],
  exports: [
    EventDetailOrderComponent
  ]
})
export class EventDetailOrderModule { }
