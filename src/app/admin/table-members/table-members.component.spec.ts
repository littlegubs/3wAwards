import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMembersComponent } from './table-members.component';

describe('TableMembersComponent', () => {
  let component: TableMembersComponent;
  let fixture: ComponentFixture<TableMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
