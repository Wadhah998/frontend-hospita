import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit {

   patients: Patient[] = [];
   casesNumbers:number=0;
  constructor(public api: ApiService) {}

 ngOnInit(): void {
    this.gePatients();
    
  }
  gePatients() {
    this.api.getPatients().subscribe({
      next: (res) => {
        this.patients = res;
        console.log(this.patients);
        this.casesNumbers=this.patients.length;
      },
    });
  }

}
