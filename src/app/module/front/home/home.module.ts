import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
