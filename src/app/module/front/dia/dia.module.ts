import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaRoutingModule } from './dia-routing.module';
import { DiaComponent } from './dia.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    DiaComponent
  ],
  imports: [
    CommonModule,
    DiaRoutingModule,
    NgImageSliderModule
  ]
})
export class DiaModule { }
