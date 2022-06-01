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
import { DateComponent } from '@fullcalendar/angular';

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
  parentId:number
  age : number;
  date:Date;

  idMedecin !: number;

  

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
    this.parentId=this.data.id

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
    const date = new Date(this.birthday)
    console.log(date)
    const newDate =new Date(1992,3,4)
    if (date>newDate){
      console.log(true)

    }else{
      console.log(false)
    }
    
    
    

  }

  affecterMedecin(doctorId: number | undefined, $event: Event): void {
    $event.preventDefault();
    const patientId = this.parentId;
    console.log(patientId,doctorId);
     if (patientId !== null && patientId !== undefined && doctorId !== null && doctorId !== undefined)
    {
        this.service.create('http://localhost:8000/api/patients/supervises',
            {patient_id: patientId, doctor_id: doctorId, accepted: true}, this.options).then(() => {
              console.log(patientId)
                
        }),this.dialogRef.close('تأكيد');
    }
    else  console.log( this.data.id,doctorId);
}


  chercheMedecine($event: any){

  }
  chercheMedecin($event: any){
    this.doctors =  this.service.list(`http://localhost:8000/api/persons`, this.options);
  }
  public CalculateAge(): void {
    if (this.birthday) {
      var timeDiff = Math.abs(Date.now() - new Date(this.birthday).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        }
      
      }

  // getAllMedecins  (): Promise<void>   {
  //   this.doctors =  this.service.list(`http://localhost:8000/api/persons`, this.options);
  //   console.log(this.doctors.name)
  //   return this.doctors
  // }

}
