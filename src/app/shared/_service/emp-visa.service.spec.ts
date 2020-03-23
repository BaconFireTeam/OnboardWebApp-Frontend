import { TestBed } from '@angular/core/testing';

import { EmpVisaService } from './emp-visa.service';

describe('EmpVisaService', () => {
  let service: EmpVisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpVisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
