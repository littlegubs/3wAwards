import { TestBed, async, inject } from '@angular/core/testing';

import { UpdateClientGuard } from './update-client.guard';

describe('UpdateClientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateClientGuard]
    });
  });

  it('should ...', inject([UpdateClientGuard], (guard: UpdateClientGuard) => {
    expect(guard).toBeTruthy();
  }));
});
