import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Employee, Result } from '../Model/types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  empDetail!: Employee | undefined;
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Result> {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<Result>(url).pipe(retry(3));
  }

  saveEmployee(emp: Employee | undefined): void {
    this.empDetail = emp;
  }

  getEmployee() {
    return this.empDetail;
  }
}
