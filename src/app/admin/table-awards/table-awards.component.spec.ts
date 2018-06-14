import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAwardsComponent } from './table-awards.component';

describe('TableAwardsComponent', () => {
  let component: TableAwardsComponent;
  let fixture: ComponentFixture<TableAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
