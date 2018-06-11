import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestJudgeFormComponent } from './request-judge-form.component';

describe('RequestJudgeFormComponent', () => {
  let component: RequestJudgeFormComponent;
  let fixture: ComponentFixture<RequestJudgeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestJudgeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestJudgeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
