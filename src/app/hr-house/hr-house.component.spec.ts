import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHouseComponent } from './hr-house.component';

describe('HrHouseComponent', () => {
  let component: HrHouseComponent;
  let fixture: ComponentFixture<HrHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
