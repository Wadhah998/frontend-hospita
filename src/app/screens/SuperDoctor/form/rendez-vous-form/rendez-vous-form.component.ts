import { Component, Inject,OnInit } from '@angular/core';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Enfants } from 'src/app/models/enfant/Enfant';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rendez-vous-form',
  templateUrl: './rendez-vous-form.component.html',
  styleUrls: ['./rendez-vous-form.component.scss']
})
export class RendezVousFormComponent implements OnInit {


  medecins : Medecins []= [];

  patients: Patient[] = [];

  nomEnfant !:string;
  telephone !:string;
  email!:string;
  nomParent !:string;
  situation !:string;
  ecole !:string;


  idMedecin !: number;

  enfantForm! : FormGroup;

  constructor(private api : ApiService, private dialogRef: MatDialogRef<RendezVousFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.getAllMedecins();
    this.nomEnfant = this.data.nomEnfant;
    this.telephone = this.data.telephone;
    this.email = this.data.email;
    this.situation = this.data.situation;
    this.ecole = this.data.ecole;

    this.enfantForm = this.formBuilder.group({
      idMedecin: [],
      nomEnfant: [this.data.nomEnfant],
      nomParent: [this.data.nomParent],
      telephone : [this.data.telephone],
      cin : [this.data.cin],
      email: [this.data.email],
      gouvernat: [this.data.gouvernat],
      ecole: [this.data.ecole],
      date: [this.data.date],
      password: [this.data.password],
      situation: [this.data.situation],
      codePostal: [this.data.codePostal],

      
     });

  }

  affecterMedecin() {

    this.api.putEnfant(this.enfantForm.value, this.data.id)
  .subscribe({
    next:(res)=>{
      alert("تم تحديث الطبيب خليفة");
      this.enfantForm.reset();
      this.dialogRef.close('تحديث');
    },
    error:()=>{
      alert("خطأ أثناء تحديث السجل");
    }
  });

  }

  chercheMedecine($event: any){

  }
  chercheMedecin($event: any){
    this.idMedecin = $event.value;
    console.log(this.idMedecin)
  }

  getAllMedecins () {
    this.api.getMedecin()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.medecins = res
    
        },
        error:(error)=>{
          alert("خطأ أثناء جلب السجلات")
        }
      })
  }

  gePatients () {
    this.api.getPatients()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.patients = res
    
        },
        error:(error)=>{
          alert("خطأ أثناء جلب السجلات")
        }
      })
  }

}
