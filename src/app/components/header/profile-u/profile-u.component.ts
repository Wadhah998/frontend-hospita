import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from './../../../services/api/secure-storage.service';

@Component({
  selector: 'app-profile-u',
  templateUrl: './profile-u.component.html',
  styleUrls: ['./profile-u.component.scss']
})
export class ProfileUComponent implements OnInit {
  name:string
  email:string
  telephone:number
  familyName:string
  gouvernorat:string
  delegation:string
  zipCode:number
  typeUser:string
  doctor:string
  loginNumber:string
  password:string
  speciality:string

  constructor(public SecureStorageService:SecureStorageService, private authService:AuthService,public service:AbstractRestService<any>,public router :Router) { }
  user=JSON.parse(localStorage.getItem("currentUser")!);

  async ngOnInit(): Promise<void> {
    const access = localStorage.getItem("access")  ;
  if (access !== null){
  const id = Number (localStorage.getItem("userId")  );
   this.doctor =  localStorage.getItem("is_super")  ;
  this.user=await this.service.get('http://localhost:8000/api/persons',id,{headers: {Authorization : `Bearer ${this.SecureStorageService.getToken(access)}`}})}
  console.log(this.user)
  if (this.doctor=='false'){
    this.typeUser='Doctor'}
  else{
      this.typeUser=this.user.typeUser

    }
  
  
  this.name=this.user.name
  this.speciality=localStorage.getItem('speciality')
  this.familyName=localStorage.getItem('familyName')
  this.email=this.user.email
  this.telephone=this.user.telephone
  this.gouvernorat=this.user.localisation.governorate
  this.delegation=this.user.localisation.delegation
  this.zipCode=this.user.localisation.zipCode
  this.loginNumber=this.user.loginNumber
  this.password='*************'

  
  }

}
