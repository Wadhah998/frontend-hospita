import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-rendez-vous-form',
  templateUrl: './rendez-vous-form.component.html',
  styleUrls: ['./rendez-vous-form.component.scss']
})
export class RendezVousFormComponent implements OnInit {


  medecins : Medecins []= [];

  patients: Patient[] = [];

  constructor(private api : ApiService) { }


  @Input()
  public doctor!: Medecins;

  ngOnInit(): void {
    this.getAllMedecins();
    this.gePatients();

  }

  affecterMedecin() {

  }

  chercheMedecin($event: any){
  }
  cherchePatient($event: any){

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
