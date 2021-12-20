import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeDataService } from './employee-data.service';

describe('EmployeeDataService', () => {
  let service: EmployeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { get: () => {} } },
      ],
    });
    service = TestBed.inject(EmployeeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
