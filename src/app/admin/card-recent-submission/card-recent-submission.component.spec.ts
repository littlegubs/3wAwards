import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentSubmissionComponent } from './card-recent-submission.component';

describe('CardRecentSubmissionComponent', () => {
  let component: CardRecentSubmissionComponent;
  let fixture: ComponentFixture<CardRecentSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecentSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
