import { TestBed } from '@angular/core/testing';

import { SearchProfileResolverService } from './search-profile-resolver.service';

describe('SearchProfileResolverService', () => {
  let service: SearchProfileResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProfileResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
