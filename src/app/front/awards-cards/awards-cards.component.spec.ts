import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCardsComponent } from './awards-cards.component';

describe('AwardsCardsComponent', () => {
  let component: AwardsCardsComponent;
  let fixture: ComponentFixture<AwardsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
