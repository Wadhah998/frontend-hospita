import { ApiService } from 'src/app/services/api/api.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { saveDataToLocalhost } from 'src/app/services/genericservice.service';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';

export interface Token{
  access: string;
  refresh: string;
  userId: number;
  typeUser: string;
  name: string;
  familyName: string | undefined;
  is_super:any;
  speciality:string
}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted = false;
  validated !: boolean;
  error !: string;
  hide = true;
  user!:Token;
  userForm! : FormGroup;
  public currentUser = User;
  constructor(private router: Router,private http:HttpClient,public secureStorageService:SecureStorageService,private formBuilder:FormBuilder,public ApiService:ApiService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      password: ['', Validators.required],
      loginNumber: ['', Validators.required],
    
  })}
  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSignup(): void {

    this.router.navigate(['/signup'])

  }
  
  onSignin($event: Event): void {
   
    $event.preventDefault();
    this.submitted = true;
        this.ApiService.login(this.userForm.value.loginNumber, this.userForm.value.password).then(async (response: Token) => {
            response.access = this.secureStorageService.setToken(response.access);
            response.refresh = this.secureStorageService.setToken(response.refresh);
            saveDataToLocalhost(response);
            if (response.typeUser=='admin'){
              this.router.navigate(['/admin'])
            }else if (response.typeUser=='parent'){
              this.router.navigate(['/parent-dashboard'])
            }else if ((response.typeUser=='superdoctor')&& (response.is_super==true)){
              
              this.router.navigate(['/superDoctorDashboard'])
            }else if ((response.typeUser=='superdoctor') && (response.is_super==false)){
              this.router.navigate(['/doctor-appointment'])}
            else if (response.typeUser=='school')
            this.router.navigate(['/ecoleDashboard']) 
            else if (response.typeUser=="teacher") 
            this.router.navigate(["/maitreDashboard"])
            localStorage.setItem("currentUser",JSON.stringify(response));
     
  }).catch((err) => {
    this.validated = false;
    this.error = err.error.error;
    Swal.fire({
      title:'الرجاء التثبت من المعطيات الشخصية',
      // text: 'هل أنت متأكد أنك تريد حذف هذا الطبيب؟',
      icon: 'warning',
      //showCancelButton: true,
      // confirmButtonText: 'حذف',
      // cancelButtonText: 'إلغاء',
      // confirmButtonColor: '#34c38f',
      // cancelButtonColor: '#f46a6a',
       showConfirmButton: false,
       timer: 1500
      //position:
    })
  })}
    
   public saveData(registerForm: NgForm) {
     console.log(registerForm.form);
     console.log('valeurs: ', JSON.stringify(registerForm.value));
     console.log('hello');
   }

 
}