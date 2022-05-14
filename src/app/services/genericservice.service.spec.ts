import { TestBed } from '@angular/core/testing';

import { GenericserviceService } from './genericservice.service';

describe('GenericserviceService', () => {
  let service: GenericserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
