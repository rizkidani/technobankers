import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEbookPaymentComponent } from './payment-ebook-payment.component';

describe('PaymentEbookPaymentComponent', () => {
  let component: PaymentEbookPaymentComponent;
  let fixture: ComponentFixture<PaymentEbookPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEbookPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEbookPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
