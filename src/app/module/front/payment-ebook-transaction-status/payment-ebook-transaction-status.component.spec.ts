import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEbookTransactionStatusComponent } from './payment-ebook-transaction-status.component';

describe('PaymentEbookTransactionStatusComponent', () => {
  let component: PaymentEbookTransactionStatusComponent;
  let fixture: ComponentFixture<PaymentEbookTransactionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEbookTransactionStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEbookTransactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
