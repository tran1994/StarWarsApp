import { TestBed } from '@angular/core/testing';

import { SpeciesserviceService } from './speciesservice.service';

describe('SpeciesserviceService', () => {
  let service: SpeciesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
