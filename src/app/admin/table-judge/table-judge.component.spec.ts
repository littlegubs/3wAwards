import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJudgeComponent } from './table-judge.component';

describe('TableJudgeComponent', () => {
  let component: TableJudgeComponent;
  let fixture: ComponentFixture<TableJudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableJudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
