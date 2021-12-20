import { TestBed } from '@angular/core/testing';

import { SignUpGuardService } from './signup.guard';

describe('SignUpGuardService', () => {
  let guard: SignUpGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignUpGuardService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
