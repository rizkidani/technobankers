import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBookRoutingModule } from './e-book-routing.module';
import { EBookComponent } from './e-book.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    EBookComponent
  ],
  imports: [
    CommonModule,
    EBookRoutingModule,
    SharedModule
  ]
})
export class EBookModule { }
