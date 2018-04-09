import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyProfileComponent } from './agency-profile.component';

describe('AgencyProfileComponent', () => {
  let component: AgencyProfileComponent;
  let fixture: ComponentFixture<AgencyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
