import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Employee } from '../Model/types';
import { EmployeeDataService } from '../Services/Employee-service/employee-data.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  constructor(private employeeDataService: EmployeeDataService,private route: Router) {}
  allEmployees: Employee[] | undefined = [];
  loading: boolean = true;
  ngOnInit(): void {
    this.getEmployees();
  }
  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getEmployees() {
    this.employeeDataService
      .getEmployees()
      .pipe(
        // simulate a 500ms to 1.5s network latency from the server
        delay(this.randomInteger(500, 1500))
      )
      .subscribe(
        (data) => {
          this.allEmployees = data.data;
          this.loading = false;
        },
        (err) => {
          alert(err.message+' Press OK to retry')
          this.route.navigate(['/employees']).then(() => {
            window.location.reload();
          });
        }
      );
  }
  viewDetail(index: number) {
    const employeeDetail=this.allEmployees ? this.allEmployees[index] : undefined;
    this.employeeDataService.saveEmployee(employeeDetail);
  }
}
