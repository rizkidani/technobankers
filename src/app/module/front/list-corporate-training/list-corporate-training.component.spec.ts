import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorporateTrainingComponent } from './list-corporate-training.component';

describe('ListCorporateTrainingComponent', () => {
  let component: ListCorporateTrainingComponent;
  let fixture: ComponentFixture<ListCorporateTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCorporateTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCorporateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
