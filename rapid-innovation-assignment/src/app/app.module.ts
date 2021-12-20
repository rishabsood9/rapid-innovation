import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeDataService } from './Services/employee-data.service';
import { SignUpGuardService } from './Services/Sign-up-gaurd/signup.guard';

@NgModule({
  declarations: [AppComponent, SignUpPageComponent, EmployeeTableComponent, EmployeeDetailComponent, ErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeDataService,SignUpGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
