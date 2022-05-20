import { ApiService } from 'src/app/services/api/api.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { saveDataToLocalhost } from 'src/app/services/genericservice.service';
export interface Token{
  access: string;
  refresh: string;
  userId: number;
  typeUser: string;
  name: string;
  familyName: string | undefined;
}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  validated !: boolean;
  error !: string;

  user!:Token;
  userForm! : FormGroup;
  public currentUser = User;
  constructor(private router: Router,private http:HttpClient,public secureStorageService:SecureStorageService,private formBuilder:FormBuilder,public ApiService:ApiService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      password: ['', Validators.required],
      loginNumber: ['', [Validators.required, Validators.email]],
    
  })}

  onSignup(): void {
    this.router.navigate(['/signup'])

  }
  
  onSignin($event: Event): void {
    $event.preventDefault();
        this.ApiService.login(this.userForm.value.loginNumber, this.userForm.value.password).then(async (response: Token) => {
            response.access = this.secureStorageService.setToken(response.access);
            response.refresh = this.secureStorageService.setToken(response.refresh);
            saveDataToLocalhost(response);
            if (response.typeUser=='admin'){
              this.router.navigate(['/admin'])
            }else if (response.typeUser=='parent'){
              this.router.navigate(['/parent-dashboard'])
            }else if (response.typeUser=='superdoctor'){
              
              this.router.navigate(['/superDoctorDashboard'])
            }else if (response.typeUser=='doctor'){
              this.router.navigate(['/doctor-appointment'])}
     localStorage.setItem("currentUser",JSON.stringify(response));
     
  }).catch((err) => {
    this.validated = false;
    this.error = err.error.error;
     alert("الرجاء التثبت من المعطيات الشخصية")})}
  
   public saveData(registerForm: NgForm) {
     console.log(registerForm.form);
     console.log('valeurs: ', JSON.stringify(registerForm.value));
     console.log('hello');
   }

 
}
