import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyCardComponent } from './agency-card.component';

describe('AgencyCardComponent', () => {
  let component: AgencyCardComponent;
  let fixture: ComponentFixture<AgencyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
