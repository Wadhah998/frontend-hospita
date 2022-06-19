import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient.model';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { RendezVousFormComponent } from 'src/app/screens/SuperDoctor/form/rendez-vous-form/rendez-vous-form.component';
import { ApiService } from 'src/app/services/api/api.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';

@Component({
  selector: 'app-rdvdocter',
  templateUrl: './rdvdocter.component.html',
  styleUrls: ['./rdvdocter.component.scss']
})
export class RdvdocterComponent extends DynamicTableCrud<any> implements OnInit {

  constructor(secureStorageService:SecureStorageService,service:AbstractRestService<any> ,private api : ApiService, private dialogRef: MatDialogRef<RendezVousFormComponent>, @Inject(MAT_DIALOG_DATA) public override data: any, private formBuilder : FormBuilder, private _snackBar: MatSnackBar) { 
    super( service, 'http://localhost:8000/api/persons', secureStorageService)
  }
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
  supervised:number;

  idMedecin !: number;
  familyNamep !:string;

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
   this.familyName = this.data.familyName;
   this.familyNamep = this.data.parent.familyName;
   this.birthday = this.data.birthdate;
   this.nomParent=this.data.parent.name;
   this.score=this.data.scoreParent;
   this.telephone=this.data.parent.telephone
   this.parentId=this.data.id
   this.supervised=this.data.supervise.doctor;
   
   

   
     
   
   
   
   

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

}
