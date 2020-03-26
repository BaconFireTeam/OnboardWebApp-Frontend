import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentsComponent } from './get-documents.component';

describe('GetDocumentsComponent', () => {
  let component: GetDocumentsComponent;
  let fixture: ComponentFixture<GetDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
