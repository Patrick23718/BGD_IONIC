import { TestBed } from '@angular/core/testing';

import { SearchProfilResolverService } from './search-profil-resolver.service';

describe('SearchProfilResolverService', () => {
  let service: SearchProfilResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProfilResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
