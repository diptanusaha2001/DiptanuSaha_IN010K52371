import { TestBed } from '@angular/core/testing';

import { GetservService } from './getserv.service';

describe('GetservService', () => {
  let service: GetservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
