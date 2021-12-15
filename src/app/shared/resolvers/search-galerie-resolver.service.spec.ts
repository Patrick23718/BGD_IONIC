import { TestBed } from '@angular/core/testing';

import { SearchGalerieResolverService } from './search-galerie-resolver.service';

describe('SearchGalerieResolverService', () => {
  let service: SearchGalerieResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGalerieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
