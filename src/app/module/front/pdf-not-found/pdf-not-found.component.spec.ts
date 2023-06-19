import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfNotFoundComponent } from './pdf-not-found.component';

describe('PdfNotFoundComponent', () => {
  let component: PdfNotFoundComponent;
  let fixture: ComponentFixture<PdfNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
