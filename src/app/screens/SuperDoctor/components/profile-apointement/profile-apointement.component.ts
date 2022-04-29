import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { MedecinFormComponent } from 'src/app/screens/form/medecin-form/medecin-form.component';
import { ApiService } from 'src/app/services/api/api.service';
import { RendezVousFormComponent } from '../../form/rendez-vous-form/rendez-vous-form.component';
import { ProfileDoctorComponent } from '../profile-doctor/profile-doctor.component';
import { ProfileMedecinComponent } from '../profile-medecin/profile-medecin.component';

@Component({
  selector: 'app-profile-apointement',
  templateUrl: './profile-apointement.component.html',
  styleUrls: ['./profile-apointement.component.scss']
})
export class ProfileApointementComponent implements OnInit {


  @Output()
  public select: EventEmitter<Medecins> = new EventEmitter();

  img: string = './assets/images/users/user-1.jpg';

  indexe!: string;

  medecins : Medecins []= [];

  doctor!: Medecins;

  constructor(private api : ApiService, private dialog : MatDialog, private router : Router) { }

  ngOnInit(): void {
    this.getAllMedecins();
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

  onSelect (m: Medecins){
    this.doctor = m;
    console.log('from list', this.medecins);
    this.select.emit(m);
  }

  showMedecin(id : number){
      
            this.router.navigate(['/profileApoint','singleDoctor', id]);
    /*console.log('it works');
    const dialogRef = this.dialog.open(ProfileMedecinComponent,{
      width : '32%',
      //data:row,
      autoFocus :true,

    });
    setTimeout(() => {
      dialogRef.close();
    }, 15000);*/
  }


}
