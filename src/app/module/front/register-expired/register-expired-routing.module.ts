import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterExpiredComponent } from './register-expired.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterExpiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterExpiredRoutingModule { }
