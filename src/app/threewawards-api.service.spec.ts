import { TestBed, inject } from '@angular/core/testing';

import { ThreewawardsApiService } from './threewawards-api.service';

describe('ThreewawardsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreewawardsApiService]
    });
  });

  it('should be created', inject([ThreewawardsApiService], (service: ThreewawardsApiService) => {
    expect(service).toBeTruthy();
  }));
});
