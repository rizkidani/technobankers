import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailOrderComponent } from './event-detail-order.component';

describe('EventDetailOrderComponent', () => {
  let component: EventDetailOrderComponent;
  let fixture: ComponentFixture<EventDetailOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
