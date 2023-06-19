import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurLibraryRoutingModule } from './our-library-routing.module';
import { OurLibraryComponent } from './our-library.component';


@NgModule({
  declarations: [
    OurLibraryComponent
  ],
  imports: [
    CommonModule,
    OurLibraryRoutingModule
  ]
})
export class OurLibraryModule { }
