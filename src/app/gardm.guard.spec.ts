import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardmGuard } from './gardm.guard';

describe('gardmGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
