import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Model/types';
import { EmployeeDataService } from '../Services/Employee-service/employee-data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | undefined;
  myDate = Date.now();
  constructor(
    private employeeDataService: EmployeeDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.employee = this.employeeDataService.getEmployee();
    if (this.employee) {
      const storedEmployee = localStorage.getItem('employee');
      if (storedEmployee) {
        const emp: Employee = JSON.parse(storedEmployee);
        if (this.employee) {
          this.employee.contactNumber = emp.contactNumber;
          this.employee.emailId = emp.emailId;
        }
      }
    } else {
      alert('Kindly Click on the Employee to get details');
      this.back();
    }
  }

  back() {
    this.route.navigate(['/employees']);
  }
}
