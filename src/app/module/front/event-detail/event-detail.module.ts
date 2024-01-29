import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailRoutingModule } from './event-detail-routing.module';
import { EventDetailComponent } from './event-detail.component';


@NgModule({
  declarations: [
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    EventDetailRoutingModule
  ],
  exports: [
    EventDetailComponent
  ]
})
export class EventDetailModule { }
