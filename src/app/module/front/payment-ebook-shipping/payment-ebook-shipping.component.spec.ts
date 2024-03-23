import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEbookShippingComponent } from './payment-ebook-shipping.component';

describe('PaymentEbookShippingComponent', () => {
  let component: PaymentEbookShippingComponent;
  let fixture: ComponentFixture<PaymentEbookShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEbookShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEbookShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
