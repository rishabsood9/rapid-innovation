export interface Employee {
  id?: number;
  employee_name?: string;
  employee_age?: number;
  employee_salary?: number;
  contactNumber?: Text;
  emailId?: string;
}

export interface Result {
  status?: string;
  message?: string;
  data?: Employee[];
}
