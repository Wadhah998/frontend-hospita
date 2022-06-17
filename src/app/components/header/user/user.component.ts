import { Router } from '@angular/router';
import { SecureStorageService } from './../../../services/api/secure-storage.service';
import { User } from './../../../screens/sign-in/user';
import { AbstractRestService } from 'src/app/services/genericservice.service';


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  
  constructor(public SecureStorageService:SecureStorageService, private authService:AuthService,public service:AbstractRestService<any>,public router :Router) {}
   user=JSON.parse(localStorage.getItem("currentUser")!);
   
   
async  ngOnInit(): Promise <void> {
  // const access = localStorage.getItem("access")  ;
  // if (access !== null){
  // const id = Number (localStorage.getItem("userId")  );
  // this.user=await this.service.get('http://localhost:8000/api/persons',id,{headers: {Authorization : `Bearer ${this.SecureStorageService.getToken(access)}`}})}
   
  }
  logOut(){
    this.authService.logOut();
  }
  profile(){
    this.router.navigate(['/profileU'])
  }

  
}
