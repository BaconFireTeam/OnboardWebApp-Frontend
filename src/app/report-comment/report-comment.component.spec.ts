import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCommentComponent } from './report-comment.component';

describe('ReportCommentComponent', () => {
  let component: ReportCommentComponent;
  let fixture: ComponentFixture<ReportCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
