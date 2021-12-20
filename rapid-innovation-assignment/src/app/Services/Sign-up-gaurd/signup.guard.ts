import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const employee = localStorage.getItem('employee');
      if (employee) {
        return true;
      } else {
        alert('Kindly signup to access Employee Table Page!!');
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
        return false;
      }
  }
  
}
