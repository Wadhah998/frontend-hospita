import { AbstractRestService } from 'src/app/services/genericservice.service';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators, } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user.module';
import { DynamicTableCrud } from '../../admin/dynamic-table.crud.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import Swal from 'sweetalert2';
interface Option {
  headers: object;
  params: object | null | undefined;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  List = [ {value:'school',label:'مدرسة'},{value:'superdoctor',label:'طبيب أول'}]
  userForm! : FormGroup;
  actionBtn : string = "تأكيد";
  school : "school" | undefined
  superdoctor : "superdocter" | undefined
  isSuperDoctor: boolean | undefined;
  typeUser!: string;
  public  options!: Option;
  error: any;
  

   constructor( public service:AbstractRestService<any>, private api : ApiService ,private formBuilder:FormBuilder ,
    private dialogRef:MatDialogRef<UserFormComponent>,@Inject(MAT_DIALOG_DATA) public editData :any, public secureStorageService : SecureStorageService) {
     
     }
  
  ngOnInit(): void {
    this.userForm = new FormGroup({
      typeUser:new FormControl('',[Validators.required]),
      nom:new FormControl ('', [Validators.required]),
      familyName:new FormControl ('', [Validators.required]),
      telephone:new FormControl ('', [Validators.required]),
      loginNumber:new FormControl('',[ Validators.required]),
      password:new FormControl ('',[ Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email]),
      delegation:new FormControl('', [Validators.required]),
      governorate:new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      
  });

  if (this.typeUser === 'admin' && this.isSuperDoctor || this.typeUser === 'school' || this.typeUser === 'superdoctor') {
            this.userForm.addControl('familyName', new FormControl('', [Validators.required]));
            if (this.typeUser === 'superdoctor') {
                this.userForm.addControl('speciality', new FormControl('', [Validators.required]));
            }
        }
  if(this.editData){
    this.actionBtn = "تحديث";
    
    this.userForm.controls['typeUser'].setValue(this.editData.typeUser);
    this.userForm.controls['loginNumber'].setValue(this.editData.loginNumber);
    this.userForm.controls['email'].setValue(this.editData.email);
    this.userForm.controls['nom'].setValue(this.editData.name);
    
    this.userForm.controls['telephone'].setValue(this.editData.telephone);
    
    this.userForm.controls['delegation'].setValue(this.editData.localisation.delegation);
    this.userForm.controls['governorate'].setValue(this.editData.localisation.governorate);
    this.userForm.controls['zipCode'].setValue(this.editData.localisation.zipCode);
    this.userForm.controls['password'].setValue("*********");
    

  }

  }
 
 
 
 
 
 
 
 
 
 
 
 
  postUser(){
    console.log(this.userForm.value);
    if (this.options === undefined){
      const access = localStorage.getItem('access');
      if (access !== null){
              this.options = {
                  headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                  params: null
              };
          }
      }
     
        
     


    let typeUser: string;
    if (this.typeUser === 'admin') {
        typeUser = this.userForm.value.typeUser;
    } else {
        typeUser = this.typeUser === 'superdoctor' ? 'doctor' : 'teacher';
    }
      this.service.create('http://localhost:8000/api/persons',{
    telephone: this.userForm.value.telephone,
    typeUser:this.userForm.value.typeUser,
    school_id: this.typeUser === 'school' ? localStorage.getItem('userId') : undefined,
    is_super: true,
    super_doctor_id: this.typeUser === 'superdoctor' ? localStorage.getItem('userId') : undefined,
    name: this.userForm.value.nom,
    familyName: this.userForm.value?.familyName,
    password: this.userForm.value.password,
    speciality: this.userForm.value?.speciality,
    loginNumber: this.userForm.value.loginNumber,
    email: this.userForm.value?.email,
    localisation: this.userForm.value.delegation === null ? null : {
        governorate: this.userForm.value.governorate,
        delegation: this.userForm.value.delegation,
        zipCode: this.userForm.value.zipCode
    }
        },this.options).catch((err) => {
          
          this.error = err.error.error;
          Swal.fire('رقم تسجيل موجود') 
        console.log(this.error)
        return this.error==null
        // this.dialogRef.close('تأكيد');
        
        })
        if (!this.error.error){
          console.log(this.error)
       this.dialogRef.close('تأكيد');
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
         
        
        
       
}
async modifieruser(){
  if (this.actionBtn = 'تحديث'){
    if (this.options === undefined){
      const access = localStorage.getItem('access');
      if (access !== null){
              this.options = {
                  headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                  params: null
              };
          }
      }
      
      if( this.userForm.value.password=="*********"){
         this.userForm.value.password='123456789'}
      await  this.service.put('http://localhost:8000/api/persons', this.editData.id,{

      telephone: this.userForm.value.telephone,
      name: this.userForm.value.nom,
      familyName: this.userForm.value.familyName,
       password: this.userForm.value.password,
      loginNumber: this.userForm.value.loginNumber,
      email: this.userForm.value.email,
      Localisation: this.userForm.value.delegation === null ? null : {
          governorate: this.userForm.value.governorate,
          delegation: this.userForm.value.delegation,
          zipCode: this.userForm.value.zipCode
          
      }
          },this.options).catch((err) => {
          this.error = err.error.error;
          Swal.fire('رقم تسجيل موجود')
          // alert("رقم تسجيل موجود") 
          console.log(this.error)
          return this.error
          // this.dialogRef.close('تأكيد');   
          })
          if (!this.error){
         this.dialogRef.close('تأكيد');
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
         //  Swal.fire({
        //   title: 'Sweet!',
        //   text: 'Modal with a custom image.',
        //   imageUrl: 'https://unsplash.it/400/200',
        //   imageWidth: 400,
        //   imageHeight: 200,
        //   imageAlt: 'Custom image',
        // })
          // alert("تم تغيير المعطيات بناجح") 
        }}
} 
}