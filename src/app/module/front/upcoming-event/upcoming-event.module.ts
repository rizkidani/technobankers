import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingEventRoutingModule } from './upcoming-event-routing.module';
import { UpcomingEventComponent } from './upcoming-event.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UpcomingEventComponent
  ],
  imports: [
    CommonModule,
    UpcomingEventRoutingModule,
    NgbCarouselModule
  ]
})
export class UpcomingEventModule { }
