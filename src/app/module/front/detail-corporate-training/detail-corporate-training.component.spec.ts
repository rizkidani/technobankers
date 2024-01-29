import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCorporateTrainingComponent } from './detail-corporate-training.component';

describe('DetailCorporateTrainingComponent', () => {
  let component: DetailCorporateTrainingComponent;
  let fixture: ComponentFixture<DetailCorporateTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCorporateTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCorporateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
