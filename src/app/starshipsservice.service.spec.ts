import { TestBed } from '@angular/core/testing';

import { StarshipsserviceService } from './starshipsservice.service';

describe('StarshipsserviceService', () => {
  let service: StarshipsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
