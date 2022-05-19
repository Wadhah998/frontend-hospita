import { AbstractRestService } from 'src/app/services/genericservice.service';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { Component, Inject,OnInit } from '@angular/core';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { extend } from 'lodash';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';

@Component({
  selector: 'app-rendez-vous-form',
  templateUrl: './rendez-vous-form.component.html',
  styleUrls: ['./rendez-vous-form.component.scss']
})
export class RendezVousFormComponent extends DynamicTableCrud<any> implements OnInit {


  medecins : Medecins []= [];

  patients: Patient[] = [];

  nomEnfant !:string;
  birthday !:string;
  email!:string;
  score !:string;
  familyName !:string;
  ecole !:string;
  nomParent!:string;
  telephone!:string;
  doctors !: any;
  typeUser!: string;
  access !: string | null;


  idMedecin !: number;

  enfantForm! : FormGroup;

  constructor(secureStorageService:SecureStorageService,service:AbstractRestService<any> ,private api : ApiService, private dialogRef: MatDialogRef<RendezVousFormComponent>, @Inject(MAT_DIALOG_DATA) public override data: any, private formBuilder : FormBuilder, private _snackBar: MatSnackBar) { 
    super( service, 'http://localhost:8000/api/persons', secureStorageService)
  }

  ngOnInit(): void {
     this.access = localStorage.getItem('access');
    const typeUser = localStorage.getItem('typeUser');
    if (typeUser !== null){
        this.typeUser = typeUser;
    }
    if (this.access) {
        this.options = {
            params: null,
            headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}}}
    this.getData();
    this.nomEnfant = this.data.name;
    this.familyName = this.data.parent.familyName;
    this.birthday = this.data.birthdate;
    this.nomParent=this.data.parent.name;
    this.score=this.data.scoreParent;
    this.telephone=this.data.parent.telephone

    // this.enfantForm = this.formBuilder.group({
    //   idMedecin: ['', Validators.required],
    //   nomEnfant: [this.data.name],
    //   nomParent: [this.data.nomParent],
    //   telephone : [this.data.telephone],
    //   cin : [this.data.cin],
    //   email: [this.data.email],
    //   gouvernat: [this.data.gouvernat],
    //   ecole: [this.data.ecole],
    //   date: [this.data.date],
    //   password: [this.data.password],
    //   situation: [this.data.situation],
    //   codePostal: [this.data.codePostal],
    //   confirm : [false]

      
    //  });

  }

  affecterMedecin() {
    if(this.enfantForm.valid){
      this.api.putEnfant(this.enfantForm.value, this.data.id)
      .subscribe({
        next:(res)=>{
          this._snackBar.open('موعد تم تنفيذها بنجاح','',
    { 
      duration: 2000
  });
          //alert("تم تحديث الطبيب خليفة");
          this.enfantForm.reset();
          this.dialogRef.close('تحديث');
        },
    error:()=>{
     // alert("خطأ أثناء تحديث السجل");
    }
  });

    }
  }

  chercheMedecine($event: any){

  }
  chercheMedecin($event: any){
    this.doctors =  this.service.list(`http://localhost:8000/api/persons`, this.options);
  }

  getAllMedecins  (): Promise<void>   {
    this.doctors =  this.service.list(`http://localhost:8000/api/persons`, this.options);
    console.log(this.doctors.name)
    return this.doctors
  }

}
