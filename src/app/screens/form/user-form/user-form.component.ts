

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  List = [ "مدرسة","heloo"]
  userForm! : FormGroup;
  actionBtn : string = "تأكيد";
  school : "school" | undefined
  superdoctor : "superdocter" | undefined 
  
  isSuperDoctor: boolean | undefined;
   constructor(private api : ApiService ,private formBuilder:FormBuilder ,private dialogRef:MatDialogRef<UserFormComponent>,@Inject(MAT_DIALOG_DATA) public editData :any) { }
  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      typeUser:['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      loginNumber:['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      delegation:['', Validators.required],
      governorate:['', Validators.required],
      zipCode: ['', Validators.required]
  })
  if(this.editData){
    this.actionBtn = "تحديث";
    
    this.userForm.controls['typeUser'].setValue(this.editData.typeUser);
    this.userForm.controls['loginNumber'].setValue(this.editData.loginNumber);
    this.userForm.controls['email'].setValue(this.editData.email);
    this.userForm.controls['nom'].setValue(this.editData.nom);
    this.userForm.controls['telephone'].setValue(this.editData.telephone);
    this.userForm.controls['password'].setValue(this.editData.password);
    this.userForm.controls['delegation'].setValue(this.editData.delegation);
    this.userForm.controls['governorate'].setValue(this.editData.governorate);
    this.userForm.controls['zipCode'].setValue(this.editData.zipCode);

  }

  }
  postUser(){
    if(!this.editData){

     {
      this.api.postuser(this.userForm.value)
      .subscribe({
        next:(res)=>{
          alert("succes");
          this.userForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error")
        }
      })
    }
  } else {
    this.modifieruser();
        }
    
    
        
     

     
     

}
modifieruser(){
  this.api.putuser(this.userForm.value, this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("تم تحديث الطبيب خليفة");
      this.userForm.reset();
      this.dialogRef.close('تحديث');
    },
    error:()=>{
      alert("خطأ أثناء تحديث السجل");
    }
  });
} 
}
