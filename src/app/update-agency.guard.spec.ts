import { TestBed, async, inject } from '@angular/core/testing';

import { UpdateAgencyGuard } from './update-agency.guard';

describe('UpdateAgencyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateAgencyGuard]
    });
  });

  it('should ...', inject([UpdateAgencyGuard], (guard: UpdateAgencyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
