import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardFormComponent } from './award-form.component';

describe('AwardFormComponent', () => {
  let component: AwardFormComponent;
  let fixture: ComponentFixture<AwardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
