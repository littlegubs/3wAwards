import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectMemberComponent } from './card-project-member.component';

describe('CardProjectMemberComponent', () => {
  let component: CardProjectMemberComponent;
  let fixture: ComponentFixture<CardProjectMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProjectMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProjectMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
