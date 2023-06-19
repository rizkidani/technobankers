import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfNotFoundRoutingModule } from './pdf-not-found-routing.module';
import { PdfNotFoundComponent } from './pdf-not-found.component';


@NgModule({
  declarations: [
    PdfNotFoundComponent
  ],
  imports: [
    CommonModule,
    PdfNotFoundRoutingModule
  ]
})
export class PdfNotFoundModule { }
