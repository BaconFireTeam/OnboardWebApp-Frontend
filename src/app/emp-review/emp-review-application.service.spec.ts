import { TestBed } from '@angular/core/testing';

import { EmpReviewApplicationService } from './emp-review-application.service';

describe('EmpReviewApplicationService', () => {
  let service: EmpReviewApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpReviewApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
