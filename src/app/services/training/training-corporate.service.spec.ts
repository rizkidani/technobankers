import { TestBed } from '@angular/core/testing';

import { TrainingCorporateService } from './training-corporate.service';

describe('TrainingCorporateService', () => {
  let service: TrainingCorporateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingCorporateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
