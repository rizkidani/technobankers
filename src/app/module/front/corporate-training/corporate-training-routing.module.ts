import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateTrainingComponent } from './corporate-training.component';

const routes: Routes = [
  {
    path:'',
    component: CorporateTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateTrainingRoutingModule { }
