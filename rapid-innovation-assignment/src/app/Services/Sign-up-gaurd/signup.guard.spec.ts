import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SignUpGuardService } from './signup.guard';

describe('SignUpGuardService', () => {
  let guard: SignUpGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: { navigate: () => {} } }],
    });
    guard = TestBed.inject(SignUpGuardService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
