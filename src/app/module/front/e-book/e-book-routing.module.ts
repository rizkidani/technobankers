import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBookComponent } from './e-book.component';

const routes: Routes = [
  {
    path:'',
    component: EBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EBookRoutingModule { }
