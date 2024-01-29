import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurLibraryRoutingModule } from './our-library-routing.module';
import { OurLibraryComponent } from './our-library.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OurLibraryComponent
  ],
  imports: [
    CommonModule,
    OurLibraryRoutingModule,
    NgxPaginationModule,
    FormsModule 
  ]
})
export class OurLibraryModule { }