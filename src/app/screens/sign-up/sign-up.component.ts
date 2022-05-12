import { ApiService } from './../../services/api/api.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  User_parent } from './user';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';






@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 public user : User_parent= new User_parent()
 public registerForm!: FormGroup;
 


  constructor( private router: Router, private fb: FormBuilder, private http :HttpClient,public ApiService:ApiService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      familyName: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      loginNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('',),
      governorate: new FormControl('', [Validators.required]),
      delegation: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
  })
}

  onSignin(event:any){
    event.preventDefault();
        this.ApiService.signup({
            name: this.registerForm.value.name,
            familyName: this.registerForm.value.familyName,
            loginNumber: this.registerForm.value.loginNumber,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            telephone: this.registerForm.value.telephone,
            typeUser: 'parent',
            localisation: {
                governorate: this.registerForm.value.governorate,
                delegation: this.registerForm.value.delegation,
                zipCode: this.registerForm.value.zipCode
            } }).then(async () => {
              await this.router.navigate(['/parent-dashboard']);
          }).catch((err: Error) => {
              console.log(err);
          });
        }
            
            
    
  
  onForget(): void{
  
  }

  

  hide = true;
 
}


