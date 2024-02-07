import { Component, ElementRef, Renderer2 } from '@angular/core';
import 'flowbite';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss']
})
export class DiaComponent {

  slider2: any;
  defaultTransform2 : any;
  
  goNext2() {
    this.defaultTransform2 = this.defaultTransform2 - 398;
    if (Math.abs(this.defaultTransform2) >= this.slider2.scrollWidth / 1.7) this.defaultTransform2 = 0;
    this.slider2.style.transform = "translateX(" + this.defaultTransform2 + "px)";
    }
  goPrev2() {
    
      if (Math.abs(this.defaultTransform2) === 0) this.defaultTransform2 = 0;
      else this.defaultTransform2 = this.defaultTransform2 + 398;
      this.slider2.style.transform = "translateX(" + this.defaultTransform2 + "px)";
  }


  constructor(
    private renderer: Renderer2, 
    private el: ElementRef
    ){ }
  
  ngOnInit():void{
    this.slider2 = document.getElementById("slider2");
    this.defaultTransform2=0
  }

  scrollToJoinProgram() {
    const joinProgramElement = this.el.nativeElement.querySelector('#join-program');
    if (joinProgramElement) {
      const yOffset = -100; // Sesuaikan margin atas yang diinginkan
      const y = joinProgramElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
}


  scrollToSelectionTest() {
    const selectionTestElement = this.el.nativeElement.querySelector('#selection-test');
    if (selectionTestElement) {
      const yOffset = -100;
      const y = selectionTestElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}
