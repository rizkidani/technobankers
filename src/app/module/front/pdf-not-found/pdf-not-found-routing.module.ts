import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfNotFoundComponent } from './pdf-not-found.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PdfNotFoundComponent
  },
  {
    path: "",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfNotFoundRoutingModule { }
