import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfNotFoundRoutingModule } from './pdf-not-found-routing.module';
import { PdfNotFoundComponent } from './pdf-not-found.component';
import { NgbModule, NgbCarouselModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PdfNotFoundComponent
  ],
  imports: [
    CommonModule,
    PdfNotFoundRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbSlide,
    
  ]
})
export class PdfNotFoundModule { }
