import { TestBed } from '@angular/core/testing';

import { PlageResolveService } from './plage-resolve.service';

describe('PlageResolveService', () => {
  let service: PlageResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlageResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
