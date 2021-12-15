import { TestBed } from '@angular/core/testing';

import { VilleResolveService } from './ville-resolve.service';

describe('VilleResolveService', () => {
  let service: VilleResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
