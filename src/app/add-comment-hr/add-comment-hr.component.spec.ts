import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentHrComponent } from './add-comment-hr.component';

describe('AddCommentHrComponent', () => {
  let component: AddCommentHrComponent;
  let fixture: ComponentFixture<AddCommentHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
