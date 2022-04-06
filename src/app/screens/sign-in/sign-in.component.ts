
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {



  
  public user: User = new User();
  constructor(private router: Router,private http:HttpClient) {
  }

  ngOnInit() {

  }
 

  onSignup(): void {
    this.router.navigate(['/signup'])

  }
  
  onSignin(): void {
  this.http.get<any>("http://localhost:3000/listUsers/")
  .subscribe (res=>{
    const User = res.find((a:any)=>{
      return a.email === this.user.email && a.password === this.user.password
    });
    if (User){
      if(User.typeUser=="ولي"){
        this.router.navigate(['/parent-dashboard'])
      }else if (User.typeUser=="طبيب"){
        this.router.navigate(['/doctor-appointment'])
      }else if (User.typeUser=="طبيب أول"){
        this.router.navigate(['/superDoctorDashboard'])
      }else if (User.typeUser=="admin"){
        this.router.navigate(['/admin'])
      }else {
        alert("typeuser not identifiant")
      }
    }else{
      alert("الرجاء التثبت من المعطيات الشخصية")
    }
  }
    )

  }
  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    console.log('hello');
  }

 
}
