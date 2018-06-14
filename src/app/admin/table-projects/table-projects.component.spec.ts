import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProjectsComponent } from './table-projects.component';

describe('TableProjectsComponent', () => {
  let component: TableProjectsComponent;
  let fixture: ComponentFixture<TableProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
