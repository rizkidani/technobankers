import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailBookRoutingModule } from './detail-book-routing.module';
import { DetailBookComponent } from './detail-book.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    DetailBookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
  ]
})
export class DetailBookModule { }
