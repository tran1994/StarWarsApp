import { TestBed } from '@angular/core/testing';

import { MoviesserviceeService } from './moviesservicee.service';

describe('MoviesserviceeService', () => {
  let service: MoviesserviceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesserviceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
