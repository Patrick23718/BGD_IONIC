import { TestBed } from '@angular/core/testing';

import { PrestationResolveService } from './prestation-resolve.service';

describe('PrestationResolveService', () => {
  let service: PrestationResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
