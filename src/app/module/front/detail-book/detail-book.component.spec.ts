import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookComponent } from './detail-book.component';

describe('DetailBookComponent', () => {
  let component: DetailBookComponent;
  let fixture: ComponentFixture<DetailBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
