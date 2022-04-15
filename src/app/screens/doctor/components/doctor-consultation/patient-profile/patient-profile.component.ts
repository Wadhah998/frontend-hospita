import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent {
  @Input()
  public patient!: Patient;
}
