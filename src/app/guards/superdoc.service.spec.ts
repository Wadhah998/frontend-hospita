import { TestBed } from '@angular/core/testing';

import { SuperdocService } from './superdoc.service';

describe('SuperdocService', () => {
  let service: SuperdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
