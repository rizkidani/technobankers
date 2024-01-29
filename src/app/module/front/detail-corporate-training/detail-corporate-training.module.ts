import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCorporateTrainingRoutingModule } from './detail-corporate-training-routing.module';
import { DetailCorporateTrainingComponent } from './detail-corporate-training.component';


@NgModule({
  declarations: [
    DetailCorporateTrainingComponent
  ],
  imports: [
    CommonModule,
    DetailCorporateTrainingRoutingModule
  ]
})
export class DetailCorporateTrainingModule { }
