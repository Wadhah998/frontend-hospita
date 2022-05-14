import { TestBed } from '@angular/core/testing';

import { DynamicTable.CrudService } from './dynamic-table.crud.service';

describe('DynamicTable.CrudService', () => {
  let service: DynamicTable.CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTable.CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
