import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookComponent } from './detail-book.component';

const routes: Routes = [
{
  path:'',
  component: DetailBookComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBookRoutingModule { }
