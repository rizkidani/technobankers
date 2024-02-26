import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookReadComponent } from './detail-book-read.component';

describe('DetailBookReadComponent', () => {
  let component: DetailBookReadComponent;
  let fixture: ComponentFixture<DetailBookReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBookReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBookReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
