import { Component, Inject,OnInit } from '@angular/core';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

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

  constructor(private api : ApiService, private dialogRef: MatDialogRef<RendezVousFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder : FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllMedecins();
    this.nomEnfant = this.data.nomEnfant;
    this.telephone = this.data.telephone;
    this.email = this.data.email;
    this.situation = this.data.situation;
    this.ecole = this.data.ecole;

    this.enfantForm = this.formBuilder.group({
      idMedecin: ['', Validators.required],
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
      confirm : [false]

      
     });

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
      alert("خطأ أثناء تحديث السجل");
    }
  });

    }
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

}
