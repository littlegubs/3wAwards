import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesCardsComponent } from './agencies-cards.component';

describe('AgenciesCardsComponent', () => {
  let component: AgenciesCardsComponent;
  let fixture: ComponentFixture<AgenciesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
