import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import{Location}from '@angular/common'
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements CanActivate {

  constructor(private authService:AuthService ,private router:Router,private location:Location) { }
  canActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if (this.authService.getRole() === 'parent'){
            return true;
        }
        this.location.back();
        return false;
  }
}
