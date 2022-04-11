import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './../../../../models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-doctor-consultation',
  templateUrl: './doctor-consultation.component.html',
  styleUrls: ['./doctor-consultation.component.scss'],
})
export class DoctorConsultationComponent implements OnInit {
  pageTitle: string = 'تشخيص المرضى';
  id: number = 0;
  @Input()
  //public patient;
  patient!: Patient;
  //  patientItem!: Patient;
  constructor(public api: ApiService) {}

  ngOnInit(): void {}

  onLogin(event: Patient) {
    console.log('current event', event);
    console.log(this.id);
    this.patient = event;
    // this.patientItem = this.getSinglePatient(event);
    console.log('currentItem', this.patient);
  }
}
