import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFilesComponent } from './application-files.component';

describe('ApplicationFilesComponent', () => {
  let component: ApplicationFilesComponent;
  let fixture: ComponentFixture<ApplicationFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
