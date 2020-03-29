import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailEmployeeComponent } from './person-detail-employee.component';

describe('PersonDetailEmployeeComponent', () => {
  let component: PersonDetailEmployeeComponent;
  let fixture: ComponentFixture<PersonDetailEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
