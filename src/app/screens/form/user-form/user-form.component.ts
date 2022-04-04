

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm! : FormGroup;
  actionBtn : string = "تأكيد";
  school : "school" | undefined
  superdoctor : "superdocter" | undefined 
  
  isSuperDoctor: boolean | undefined;
  constructor(private api : ApiService ,private formBuilder:FormBuilder ,private dialogRef:MatDialogRef<UserFormComponent>) { }

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

  }
  postUser(){

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
    
    
        
     

     
     

}
test(){
  console.log(this.userForm.value)
} 
}
