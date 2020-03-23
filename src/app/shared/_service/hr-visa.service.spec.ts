import { TestBed } from '@angular/core/testing';

import { HrVisaService } from './hr-visa.service';

describe('HrVisaService', () => {
  let service: HrVisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrVisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
