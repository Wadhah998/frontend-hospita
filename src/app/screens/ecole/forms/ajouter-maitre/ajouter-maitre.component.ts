import { Localisation } from './../../../sign-up/localisation/localisation.module';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
interface Option {
  headers: object;
  params: object | null | undefined;
}

import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-ajouter-maitre',
  templateUrl: './ajouter-maitre.component.html',
  styleUrls: ['./ajouter-maitre.component.scss']
})
export class AjouterMaitreComponent implements OnInit {

  maitreForm! : FormGroup;
  actionBtn : string = "تأكيد";
  fileUploaded = true;
  typeUser!: string;
  public  options!: Option;

  constructor(
    private dialogRef: MatDialogRef<AjouterMaitreComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public service:AbstractRestService<any>,
    public secureStorageService : SecureStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.maitreForm = new FormGroup({
      typeUser:new FormControl('teacher',[Validators.required]),
      is_super:new FormControl(false,[Validators.required]),
      nom:new FormControl ('', [Validators.required]),
     
      familyName:new FormControl ('', [Validators.required]),
      telephone:new FormControl ('', [Validators.required]),
      loginNumber:new FormControl('',[ Validators.required]),
      password:new FormControl ('',[ Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email]),
      delegation:new FormControl('', [Validators.required]),
      governorate:new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]), });
      

    if (this.editData) {
      this.actionBtn = 'تحديث';
      this.maitreForm.controls['telephone'].setValue(this.editData.telephone);
      this.maitreForm.controls['email'].setValue(this.editData.email);
      this.maitreForm.controls['loginNumber'].setValue(this.editData.loginNumber);
      
      this.maitreForm.controls['nom'].setValue(this.editData.name);
      this.maitreForm.controls['familyName'].setValue(this.editData.familyName) ;
      this.maitreForm.controls['delegation'].setValue(this.editData.localisation.delegation);
      this.maitreForm.controls['governorate'].setValue(this.editData.localisation.governorate);
      this.maitreForm.controls['zipCode'].setValue(this.editData.localisation.zipCode);
      
      this.maitreForm.controls['password'].setValue('*********');
      this.maitreForm.controls['id'].setValue(this.editData.id);
    }
  }

  addMaitre() {
    console.log(this.maitreForm.value);
    if (this.options === undefined){
      const access = localStorage.getItem('access');
      if (access !== null){
              this.options = {
                  headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                  params: null
              };
          }
      }
      console.log(this.options);
        
     


    let typeUser: string;
    if (this.typeUser === 'admin') {
        typeUser = this.maitreForm.value.typeUser;
    } else {
        typeUser = this.typeUser === 'superdoctor' ? 'doctor' : 'teacher';
    }
    this.service.create('http://localhost:8000/api/persons',{

    telephone: this.maitreForm.value.telephone,
    typeUser:this.maitreForm.value.typeUser,
    school_id: localStorage.getItem("userId"),
    is_super: this.maitreForm.value?.is_super,
    super_doctor_id: this.typeUser === 'superdoctor' ? localStorage.getItem('userId') : undefined,
    name: this.maitreForm.value.nom,
    familyName: this.maitreForm.value?.familyName,
    
    password: this.maitreForm.value.password,
    ecole: this.maitreForm.value?.ecole,
    loginNumber: this.maitreForm.value.loginNumber,
    email: this.maitreForm.value?.email,
    localisation: this.maitreForm.value.delegation === null ? null : {
        governorate: this.maitreForm.value.governorate,
        delegation: this.maitreForm.value.delegation,
        zipCode: this.maitreForm.value.zipCode
    }
  




        },this.options)
        

        this.dialogRef.close('تأكيد');
        

        
    }
  

  // modifierMaitre() {
  //   this.api.putMaitre(this.maitreForm.value, this.editData.id).subscribe({
  //     next: (res:any) => {
  //       this._snackBar.open('تم تحديث المعلم','',
  //   { 
  //     duration: 3000,
  //     verticalPosition:'bottom',
  //     horizontalPosition : 'left',
  //     panelClass: ['blue-snackbar']
  // });
  //       this.maitreForm.reset();
  //       this.dialogRef.close('تحديث');
  //     },
  //     error: () => {
  //       this._snackBar.open('خطأ أثناء تحديث السجل','',
  //   { 
  //     duration: 3000,
  //     verticalPosition:'top',
  //     horizontalPosition : 'left'
  // });
  //     },
  //   });
  // }

}
