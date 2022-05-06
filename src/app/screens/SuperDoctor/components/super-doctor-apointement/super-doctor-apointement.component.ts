import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RendezVousFormComponent } from '../../form/rendez-vous-form/rendez-vous-form.component';
import { ProfileDoctorComponent } from '../profile-doctor/profile-doctor.component';

@Component({
  selector: 'app-super-doctor-apointement',
  templateUrl: './super-doctor-apointement.component.html',
  styleUrls: ['./super-doctor-apointement.component.scss']
})
export class SuperDoctorApointementComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }


  rendezvous (){
    const dialogRef = this.dialog.open(RendezVousFormComponent,{
      width : '40%',
      autoFocus :true,
      disableClose:true

    });
  }
}
