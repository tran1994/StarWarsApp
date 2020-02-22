import { TestBed } from '@angular/core/testing';

import { VehiclesserviceService } from './vehiclesservice.service';

describe('VehiclesserviceService', () => {
  let service: VehiclesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
