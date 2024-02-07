import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaComponent } from './dia.component';

const routes: Routes = [
  {
    path:'',
    component:DiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaRoutingModule { }
