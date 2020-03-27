import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReviewApplicationComponent } from './hr-review-application.component';

describe('HrReviewApplicationComponent', () => {
  let component: HrReviewApplicationComponent;
  let fixture: ComponentFixture<HrReviewApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrReviewApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReviewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
