import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { ErrorComponent } from './error/error.component';
import { SignUpGuardService } from './Services/Sign-up-gaurd/signup.guard';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: SignUpPageComponent },
  { path: 'employees', component: EmployeeTableComponent,canActivate: [SignUpGuardService]},
  { path: 'employees/detail', component: EmployeeDetailComponent,canActivate: [SignUpGuardService]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
