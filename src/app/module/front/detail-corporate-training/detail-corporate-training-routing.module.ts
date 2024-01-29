import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCorporateTrainingComponent } from './detail-corporate-training.component';

const routes: Routes = [
  {
    path:'',
    component:DetailCorporateTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCorporateTrainingRoutingModule { }
