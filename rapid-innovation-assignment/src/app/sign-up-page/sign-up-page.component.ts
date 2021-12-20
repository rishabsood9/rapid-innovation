import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../Model/types';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  userSignupForm!: FormGroup;
  fieldTextType: boolean = false;
  get lastName() {
    return this.userSignupForm.get('lastName');
  }
  get firstName() {
    return this.userSignupForm.get('firstName');
  }
  get password() {
    return this.userSignupForm.get('password');
  }
  get email() {
    return this.userSignupForm.get('email');
  }
  get contactNumber() {
    return this.userSignupForm.get('contactNumber');
  }
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.userSignupForm = new FormGroup({
      lastName: new FormControl('', [Validators.minLength(2)]),
      firstName: new FormControl('', [Validators.minLength(2)]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^(\\+\\d+)+(?:[\\d.\\s()]*)$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
      ]),
      password: new FormControl('', [Validators.minLength(6)]),
    });
    localStorage.removeItem('employee');
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  private markFormAsTouched(): void {
    this.userSignupForm.controls['lastName'].markAsTouched();
    this.userSignupForm.controls['firstName'].markAsTouched();
    this.userSignupForm.controls['password'].markAsTouched();
    this.userSignupForm.controls['email'].markAsTouched();
    this.userSignupForm.controls['contactNumber'].markAsTouched();
  }

  private employeeData(): Employee {
    return {
      emailId: this.userSignupForm.controls['email'].value,
      employee_name: `${this.userSignupForm.controls['firstName'].value} ${this.userSignupForm.controls['lastName'].value}`,
      contactNumber: this.userSignupForm.controls['contactNumber'].value,
    };
  }

  onSubmit(): void {
    if (this.userSignupForm.invalid) {
      this.markFormAsTouched();
    } else {
      localStorage.setItem('employee', JSON.stringify(this.employeeData()));
      this.route.navigate(['/employees']);
    }
  }
}
