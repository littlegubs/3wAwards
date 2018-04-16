import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFormProfileComponent } from './member-form-profile.component';

describe('MemberFormProfileComponent', () => {
  let component: MemberFormProfileComponent;
  let fixture: ComponentFixture<MemberFormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
