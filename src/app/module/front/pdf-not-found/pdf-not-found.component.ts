import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'flowbite';

@Component({
  selector: 'app-pdf-not-found',
  templateUrl: './pdf-not-found.component.html',
  styleUrls: ['./pdf-not-found.component.scss']
})
export class PdfNotFoundComponent {
  
  constructor(
    private readonly router: Router,
  ){}

  goToHome() {
    this.router.navigate([""]);
  }

}
