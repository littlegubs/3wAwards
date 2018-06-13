import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCardsComponent } from './clients-cards.component';

describe('ClientsCardsComponent', () => {
  let component: ClientsCardsComponent;
  let fixture: ComponentFixture<ClientsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
