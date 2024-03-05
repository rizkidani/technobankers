import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExpiredComponent } from './register-expired.component';

describe('RegisterExpiredComponent', () => {
  let component: RegisterExpiredComponent;
  let fixture: ComponentFixture<RegisterExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExpiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
