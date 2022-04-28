import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 role:string;
 constructor(private http: HttpClient,private router:Router) { }
 isLoggedIn(){
   if(localStorage.getItem('currentUser')){
     return true
   }
   return false
 }
 logOut(){
   localStorage.removeItem("currentUser");
   this.router.navigate(['/'])
 }
 getRole(){
   let user=JSON.parse(localStorage.getItem("currentUser"));
   return this.role=user.typeUser;
 }
}
