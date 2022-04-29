import { Component, OnInit } from '@angular/core';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard-super-doctor',
  templateUrl: './dashboard-super-doctor.component.html',
  styleUrls: ['./dashboard-super-doctor.component.scss']
})
export class DashboardSuperDoctorComponent implements OnInit {

  medecin!: Medecins;
  id: number = 0;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }


  onLogin(event: Medecins) {
    console.log('current event', event);
    console.log(this.id);
    this.medecin = event;
    // this.patientItem = this.getSinglePatient(event);
    console.log('currentItem', this.medecin);
  }

  

}
