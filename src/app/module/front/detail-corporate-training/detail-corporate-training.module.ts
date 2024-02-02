import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCorporateTrainingRoutingModule } from './detail-corporate-training-routing.module';
import { DetailCorporateTrainingComponent } from './detail-corporate-training.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    DetailCorporateTrainingComponent
  ],
  imports: [
    CommonModule,
    DetailCorporateTrainingRoutingModule,
    NgbCarouselModule,
    NgImageSliderModule
  ]
})
export class DetailCorporateTrainingModule { }
