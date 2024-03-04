import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEbookComponent } from './payment-ebook.component';

describe('PaymentEbookComponent', () => {
  let component: PaymentEbookComponent;
  let fixture: ComponentFixture<PaymentEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
