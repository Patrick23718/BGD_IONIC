import { TestBed } from '@angular/core/testing';

import { DispoResolverService } from './dispo-resolver.service';

describe('DispoResolverService', () => {
  let service: DispoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
