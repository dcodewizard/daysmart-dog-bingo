import { TestBed } from '@angular/core/testing';

import { DogbreedService } from './dogbreed.service';

describe('DogbreedService', () => {
  let service: DogbreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogbreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
