import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCorporateTrainingComponent } from './list-corporate-training.component';

const routes: Routes = [
  {
    path:'',
    component:ListCorporateTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCorporateTrainingRoutingModule { }
