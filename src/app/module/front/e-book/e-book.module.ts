import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBookRoutingModule } from './e-book-routing.module';
import { EBookComponent } from './e-book.component';


@NgModule({
  declarations: [
    EBookComponent
  ],
  imports: [
    CommonModule,
    EBookRoutingModule
  ]
})
export class EBookModule { }
