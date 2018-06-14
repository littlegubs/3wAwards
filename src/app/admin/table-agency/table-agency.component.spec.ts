import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgencyComponent } from './table-agency.component';

describe('TableAgencyComponent', () => {
  let component: TableAgencyComponent;
  let fixture: ComponentFixture<TableAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
