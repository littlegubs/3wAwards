import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormAgencyComponent } from './update-form-agency.component';

describe('UpdateFormAgencyComponent', () => {
  let component: UpdateFormAgencyComponent;
  let fixture: ComponentFixture<UpdateFormAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
