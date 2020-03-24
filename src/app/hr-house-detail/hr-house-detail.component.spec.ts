import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHouseDetailComponent } from './hr-house-detail.component';

describe('HrHouseDetailComponent', () => {
  let component: HrHouseDetailComponent;
  let fixture: ComponentFixture<HrHouseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHouseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
