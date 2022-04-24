import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';

@Component({
  selector: 'app-doctor-messagerie',
  templateUrl: './doctor-messagerie.component.html',
  styleUrls: ['./doctor-messagerie.component.scss'],
})
export class DoctorMessagerieComponent implements OnInit {
  @Input()
  //public patient;
  patient!: Patient;
  constructor() {}

  ngOnInit(): void {}
  //backgroundUrl = './assets/images/whatsbackground.webp';
  onConversationSelected(event: Patient) {
    console.log('current event', event);
    this.patient = event;
    console.log('currentItem', this.patient);
  }
}
