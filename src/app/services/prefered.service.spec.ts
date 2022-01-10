import { TestBed } from '@angular/core/testing';

import { PreferedService } from './prefered.service';

describe('PreferedService', () => {
  let service: PreferedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
