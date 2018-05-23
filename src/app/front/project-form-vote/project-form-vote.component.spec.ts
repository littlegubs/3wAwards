import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormVoteComponent } from './project-form-vote.component';

describe('ProjectFormVoteComponent', () => {
  let component: ProjectFormVoteComponent;
  let fixture: ComponentFixture<ProjectFormVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
