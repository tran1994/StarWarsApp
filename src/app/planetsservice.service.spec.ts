import { TestBed } from '@angular/core/testing';

import { PlanetsserviceService } from './planetsservice.service';

describe('PlanetsserviceService', () => {
  let service: PlanetsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
