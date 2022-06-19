import { Localisation } from 'src/app/screens/sign-up/localisation/localisation.module';
import { ApiService } from './../../../services/api/api.service';
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

@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.scss'],
})
export class MedecinFormComponent implements OnInit {
  medecinForm!: FormGroup;
  actionBtn: string = 'تأكيد';
  fileUploaded = true;
  typeUser!: string;
  public  options!: Option;
  error: any;
  
  optionss: Object = { autoHide: false, direction: 'rtl' };
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<MedecinFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public service:AbstractRestService<any>,
    public secureStorageService : SecureStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.medecinForm = new FormGroup({
      typeUser:new FormControl('doctor',[Validators.required]),
      is_super:new FormControl(false,[Validators.required]),
      nom:new FormControl ('', [Validators.required]),
      familyName:new FormControl ('', [Validators.required]),
      telephone:new FormControl ('', [Validators.required]),
      loginNumber:new FormControl('',[ Validators.required]),
      speciality:new FormControl ('',[ Validators.required]),
      password:new FormControl ('',[ Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email]),
      delegation:new FormControl('', [Validators.required]),
      governorate:new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]), });
      

    if (this.editData) {
      this.actionBtn = 'تحديث';
      
      
      this.medecinForm.controls['telephone'].setValue(this.editData.telephone);
      this.medecinForm.controls['email'].setValue(this.editData.email);
      this.medecinForm.controls['loginNumber'].setValue(this.editData.loginNumber);
      this.medecinForm.controls['speciality'].setValue(this.editData.speciality);
    
      this.medecinForm.controls['nom'].setValue(this.editData.name);
      this.medecinForm.controls['familyName'].setValue(this.editData.familyName);
      this.medecinForm.controls['delegation'].setValue(this.editData.localisation.delegation);
      this.medecinForm.controls['governorate'].setValue(this.editData.localisation.governorate);
      this.medecinForm.controls['zipCode'].setValue(this.editData.localisation.zipCode);
      
      this.medecinForm.controls['password'].setValue("*********");
      this.medecinForm.controls['id'].setValue(this.editData.id);
      
    }
  }

  addMedecin() {
    if (this.actionBtn != 'تحديث')
    console.log(this.medecinForm.value);
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
        typeUser = this.medecinForm.value.typeUser;
    } else {
        typeUser = this.typeUser === 'superdoctor' ? 'doctor' : 'teacher';
    }
    this.service.create('http://localhost:8000/api/persons',{

    telephone: this.medecinForm.value.telephone,
    typeUser:this.medecinForm.value.typeUser,
    school_id: this.typeUser === 'school' ? localStorage.getItem('userId') : undefined,
    is_super: this.medecinForm.value?.is_super,
    super_doctor_id: this.typeUser === 'superdoctor' ? localStorage.getItem('userId') : undefined,
    name: this.medecinForm.value.nom,
    familyName: this.medecinForm.value.familyName,
    
    password: this.medecinForm.value.password,
    speciality: this.medecinForm.value.speciality,
    loginNumber: this.medecinForm.value.loginNumber,
    email: this.medecinForm.value.email,
    localisation: this.medecinForm.value.delegation === null ? null : {
        governorate: this.medecinForm.value.governorate,
        delegation: this.medecinForm.value.delegation,
        zipCode: this.medecinForm.value.zipCode
    }
        },this.options).catch((err) => {     
          this.error = err.error.error;
        alert("رقم تسجيل موجود") 
        console.log(this.error)
        return this.error
        // this.dialogRef.close('تأكيد');
        })
        if (!this.error.error){
      // this.dialogRef.close('تأكيد');
      }


       // this.dialogRef.close();

        
    }
  

  modifierMedecin() {
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
    this.service.put('http://localhost:8000/api/persons', this.editData.id,{

      telephone: this.medecinForm.value.telephone,
      typeUser:this.medecinForm.value.typeUser,
      school_id: this.typeUser === 'school' ? localStorage.getItem('userId') : undefined,
      is_super: "false",
      super_doctor_id: this.typeUser === 'superdoctor' ? localStorage.getItem('userId') : undefined,
      name: this.medecinForm.value.nom,
      familyName: this.medecinForm.value.familyName,
      
      password: this.medecinForm.value.password,
      speciality: this.medecinForm.value.speciality,
      loginNumber: this.medecinForm.value.loginNumber,
      email: this.medecinForm.value.email,
      Localisation: this.medecinForm.value.delegation === null ? null : {
          governorate: this.medecinForm.value.governorate,
          delegation: this.medecinForm.value.delegation,
          zipCode: this.medecinForm.value.zipCode
      }
    
  
  
  
  
          },this.options)}

          this.dialogRef.close();
   }
    
     
  // ;
  //       this.medecinForm.reset();
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
