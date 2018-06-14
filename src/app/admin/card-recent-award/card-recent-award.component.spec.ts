import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentAwardComponent } from './card-recent-award.component';

describe('CardRecentAwardComponent', () => {
  let component: CardRecentAwardComponent;
  let fixture: ComponentFixture<CardRecentAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecentAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
