import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'flowbite';
import { CorporateTrainingRoutingModule } from './corporate-training-routing.module';
import { CorporateTrainingComponent } from './corporate-training.component';


@NgModule({
  declarations: [
    CorporateTrainingComponent
  ],
  imports: [
    CommonModule,
    CorporateTrainingRoutingModule
  ]
})
export class CorporateTrainingModule { }
