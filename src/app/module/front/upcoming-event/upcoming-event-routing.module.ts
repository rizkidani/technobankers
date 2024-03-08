import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventComponent } from './upcoming-event.component';

const routes: Routes = [
  {
    path:'',
    component:UpcomingEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingEventRoutingModule { }
