import { TestBed } from '@angular/core/testing';

import { HrRevappService } from './hr-revapp.service';

describe('HrRevappService', () => {
  let service: HrRevappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrRevappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
