import { TestBed } from '@angular/core/testing';

import { CoiffeuseGuard } from './coiffeuse.guard';

describe('CoiffeuseGuard', () => {
  let guard: CoiffeuseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoiffeuseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
