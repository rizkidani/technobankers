import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLibraryComponent } from './our-library.component';

describe('OurLibraryComponent', () => {
  let component: OurLibraryComponent;
  let fixture: ComponentFixture<OurLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
