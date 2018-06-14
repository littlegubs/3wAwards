import { TestBed, async, inject } from '@angular/core/testing';

import { UpdateProjectGuard } from './update-project.guard';

describe('UpdateProjectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateProjectGuard]
    });
  });

  it('should ...', inject([UpdateProjectGuard], (guard: UpdateProjectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
