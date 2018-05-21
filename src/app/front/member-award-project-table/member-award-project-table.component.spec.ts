import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAwardProjectTableComponent } from './member-award-project-table.component';

describe('MemberAwardProjectTableComponent', () => {
  let component: MemberAwardProjectTableComponent;
  let fixture: ComponentFixture<MemberAwardProjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAwardProjectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAwardProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
