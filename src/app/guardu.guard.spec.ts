import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guarduGuard } from './guardu.guard';

describe('guarduGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guarduGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
