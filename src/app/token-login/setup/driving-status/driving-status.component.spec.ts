import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingStatusComponent } from './driving-status.component';

describe('DrivingStatusComponent', () => {
  let component: DrivingStatusComponent;
  let fixture: ComponentFixture<DrivingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
