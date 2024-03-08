import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import 'flowbite';

@Component({
  selector: 'app-detail-corporate-training',
  templateUrl: './detail-corporate-training.component.html',
  styleUrls: ['./detail-corporate-training.component.scss']
})
export class DetailCorporateTrainingComponent {

  slider: any;
  defaultTransform : any;
  innerWidth: any;
  
  goNext() {
    this.innerWidth = window.innerWidth;
    this.defaultTransform = this.defaultTransform - 375;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 375;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  slider2: any;
  defaultTransform2 : any;
  
  goNext2() {
    this.defaultTransform2 = this.defaultTransform2 - 375;
    if (Math.abs(this.defaultTransform2) >= this.slider.scrollWidth / 1.7) this.defaultTransform2 = 0;
    this.slider2.style.transform = "translateX(" + this.defaultTransform2 + "px)";
    }
  goPrev2() {
    
      if (Math.abs(this.defaultTransform2) === 0) this.defaultTransform2 = 0;
      else this.defaultTransform2 = this.defaultTransform2 + 375;
      this.slider2.style.transform = "translateX(" + this.defaultTransform2 + "px)";
  }

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef
    ){ }
  
  ngOnInit():void{
    this.slider = document.getElementById("slider");
    this.defaultTransform=0

    this.slider2 = document.getElementById("slider2");
    this.defaultTransform2=0
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nextSection = document.querySelector('#section-setelahnya');
    
    if (nextSection) {
      const nextSectionOffset = nextSection.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (scrollPosition >= nextSectionOffset) {
        this.renderer.removeClass(this.el.nativeElement, 'sticky');
      } else {
        this.renderer.addClass(this.el.nativeElement, 'sticky');
      }
    }
  }

 scrollToReasonToLearn() {
    const reasonToLearnElement = this.el.nativeElement.querySelector('#reason-to-learn');
    if (reasonToLearnElement) {
      const yOffset = -100; // Sesuaikan margin atas yang diinginkan
      const y = reasonToLearnElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
}


  scrollToExpectedSkills() {
    const expectedSkillsElement = this.el.nativeElement.querySelector('#expected-skills');
    if (expectedSkillsElement) {
      const yOffset = -100;
      const y = expectedSkillsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToBenefit() {
    const benefitElement = this.el.nativeElement.querySelector('#benefit');
    if (benefitElement) {
      const yOffset = -100;
      const y = benefitElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToSyllabus() {
    const syllabusElement = this.el.nativeElement.querySelector('#syllabus');
    if (syllabusElement) {
      const yOffset = -100;
      const y = syllabusElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToMentor() {
    const mentorElement = this.el.nativeElement.querySelector('#mentor');
    if (mentorElement) {
      const yOffset = -100;
      const y = mentorElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  
  carouselItems = [
    {
      image: '../../../../assets/background slider.svg',
      title: 'Slide 1 Title',
      subtitle: 'Slide 1 Subtitle'
    },
    {
      image: '../../../../assets/background slider.svg',
      title: 'Slide 2 Title',
      subtitle: 'Slide 2 Subtitle'
    },
    {
      image: '../../../../assets/background slider.svg',
      title: 'Slide 3 Title',
      subtitle: 'Slide 3 Subtitle'
    },
    {
      image: '../../../../assets/background slider.svg',
      title: 'Slide 4 Title',
      subtitle: 'Slide 4 Subtitle'
    },
  ];

  //for gallery view
  imageObject = [{
    image: '../../../../assets/image-slider.png',
    thumbImage: '../../../../assets/image-slider.png',
}, {
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
},
{
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
},
{
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
},
{
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
},
{
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
},
{
  image: '../../../../assets/image-slider.png',
  thumbImage: '../../../../assets/image-slider.png',
}];

imageClickHandler(e:any) {
  console.log('image click', e);
}

currentIndex: number = 0;
next() {
  if (this.currentIndex < this.carouselItems.length - 3) {
    this.currentIndex++;
  }
}

// Function to navigate to previous slide
prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

}
