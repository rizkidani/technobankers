import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCorporateTrainingRoutingModule } from './list-corporate-training-routing.module';
import { ListCorporateTrainingComponent } from './list-corporate-training.component';


@NgModule({
  declarations: [
    ListCorporateTrainingComponent
  ],
  imports: [
    CommonModule,
    ListCorporateTrainingRoutingModule
  ]
})
export class ListCorporateTrainingModule { }
