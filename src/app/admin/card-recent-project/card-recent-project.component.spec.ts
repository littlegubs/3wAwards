import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentProjectComponent } from './card-recent-project.component';

describe('CardRecentProjectComponent', () => {
  let component: CardRecentProjectComponent;
  let fixture: ComponentFixture<CardRecentProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecentProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
