import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEmpComponent } from './hr-emp.component';

describe('HrEmpComponent', () => {
  let component: HrEmpComponent;
  let fixture: ComponentFixture<HrEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
