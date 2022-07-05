import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import Swal from 'sweetalert2';
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
  id:number;
  options:any
  userform!:FormGroup
  constructor(public SecureStorageService:SecureStorageService, private authService:AuthService,public service:AbstractRestService<any>,public router :Router) { }
  user=JSON.parse(localStorage.getItem("currentUser")!);


  async ngOnInit(): Promise<void> {
    this.id = Number (localStorage.getItem("userId")  )
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
  this.userform = new FormGroup({
    typeUser:new FormControl('',[Validators.required]),
    is_super:new FormControl(false,[Validators.required]),
    name:new FormControl ('', [Validators.required]),
    familyName:new FormControl ('', [Validators.required]),
    telephone:new FormControl ('', [Validators.required]),
    loginNumber:new FormControl('',[ Validators.required]),
    speciality:new FormControl ('',[ Validators.required]),
    password:new FormControl ('',[ Validators.required]),
    email:new FormControl ('', [Validators.required, Validators.email]),
    delegation:new FormControl('', [Validators.required]),
    governorate:new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]), });
    this.userform.controls['name'].setValue(this.name);
    this.userform.controls['typeUser'].setValue(this.typeUser);
    this.userform.controls['telephone'].setValue(this.telephone);
    this.userform.controls['email'].setValue(this.email);
    this.userform.controls['loginNumber'].setValue(this.loginNumber)  
    this.userform.controls['speciality'].setValue(this.speciality)  
    
    this.userform.controls['familyName'].setValue(this.familyName);
    this.userform.controls['delegation'].setValue(this.delegation);
    this.userform.controls['governorate'].setValue(this.gouvernorat);
    this.userform.controls['zipCode'].setValue(this.zipCode);
    
    this.userform.controls['password'].setValue(this.password);
    
    
    
  }

async edit(){
  
  if (this.options === undefined){
    const access = localStorage.getItem('access');
    console.log(access)
    if (access !== null){
            this.options = {
                headers: {Authorization : `Bearer ${this.SecureStorageService.getToken(access)}`},
                params: null
            };
            console.log(this.options);
        }
    }console.log(this.userform.value) 
    if (this.userform.value.password==undefined){

    await  this.service.put('http://localhost:8000/api/persons', this.id,{

    telephone: this.userform.value.telephone,    
    name: this.userform.value.name,
    familyName: this.userform.value.familyName,
    password :'123456789',
    loginNumber: this.userform.value.loginNumber,
    email: this.userform.value.email,
    Localisation: this.userform.value.delegation === null ? null : {
        governorate: this.userform.value.governorate,
        delegation: this.userform.value.delegation,
        zipCode: this.userform.value.zipCode
        
        
    }
        },this.options)}
        else {
          await  this.service.put('http://localhost:8000/api/persons', this.id,{

            telephone: this.userform.value.telephone,
            name: this.userform.value.nom,
            familyName: this.userform.value.familyName,
             loginNumber: this.userform.value.loginNumber,
             password: this.userform.value.password,
            email: this.userform.value.email,
            Localisation: this.userform.value.delegation === null ? null : {
                governorate: this.userform.value.governorate,
                delegation: this.userform.value.delegation,
                zipCode: this.userform.value.zipCode
            }
                },this.options)

        }
        this.ngOnInit()
        Swal.fire({
          toast: true,
          icon: 'success',
          title: 'تمت العملية  بنجاح',
          iconColor: 'white',
          //position: 'top-center',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'colored-toast',
          },
        });
  
}



  
  
delete(id){

 console.log(id)
 if (id !== undefined) {
  if (this.options === undefined){
    const access = localStorage.getItem('access');
    console.log(access)
    if (access !== null){
            this.options = {
                headers: {Authorization : `Bearer ${this.SecureStorageService.getToken(access)}`},
                params: null
            };
            console.log(this.options);
        }
    }
  Swal.fire({
         title: 'هل أنت متأكد أنك تريد حذف هذا المستعمل',
         // text: 'هل أنت متأكد أنك تريد حذف هذا الطبيب؟',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'حذف',
         cancelButtonText: 'إلغاء',
         confirmButtonColor: '#34c38f',
         cancelButtonColor: '#f46a6a',
         //position:
       }).then((result) => {
         if (result.value) {
             if (id !== undefined) {
                 this.service.delete('http://localhost:8000/api/persons', id, this.options).then(async () => {
                     // this.data.splice(index, 1);
                     // this.numberItems--;
                     Swal.fire({
                         toast: true,
                         icon: 'success',
                         title: 'تمت عملية الحذف بنجاح',
                         iconColor: 'white',
                         //position: 'top-center',
                         showConfirmButton: false,
                         timer: 3000,
                         customClass: {
                           popup: 'colored-toast',
                         },
                       });
   
                    //console.log('done');
                    this.router.navigate(['']);
                 });
             }
          
         }
       });
 
}
   
}
        
   

}
