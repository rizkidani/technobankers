import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: 'detail/:id',
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
