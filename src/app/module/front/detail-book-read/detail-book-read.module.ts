import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBookReadRoutingModule } from './detail-book-read-routing.module';
import { DetailBookReadComponent } from './detail-book-read.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FlipBookModule } from '@labsforge/flipbook';

@NgModule({
  declarations: [
    DetailBookReadComponent
  ],
  imports: [
    CommonModule,
    DetailBookReadRoutingModule,
    NgxExtendedPdfViewerModule,
    FlipBookModule
  ]
})
export class DetailBookReadModule { }
