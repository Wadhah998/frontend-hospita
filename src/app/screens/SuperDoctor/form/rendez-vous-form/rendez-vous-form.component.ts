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
import Swal from 'sweetalert2';

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
  doctors : any[]=[];
  typeUser!: string;
  access !: string | null;
  parentId:number
  age : number;
  date:Date;
  supervised:number;

  idMedecin !: number;
  familyNamep !:string;
  userId:any
  data2!:any

  

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
    else  console.log( this.data.id,doctorId);
}
override async getData(): Promise<void> {
  this.userId=localStorage.getItem("userId")
  this.data = await this.service.list(this.actionUrl, this.options);
  console.log(this.data)
  this.data.forEach(element => {
 
    if (element.super_doctor_id==this.userId){
       this.doctors.push(element);
  }
   
});this.data2=this.doctors
  // this.getData()
}

 
  
  

 

}
