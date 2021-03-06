

import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-doctor-messagerie',
  templateUrl: './doctor-messagerie.component.html',
  styleUrls: ['./doctor-messagerie.component.scss'],
})
export class DoctorMessagerieComponent implements OnInit {
  @Input()
  
  patient!: Patient;
  constructor() {}

  ngOnInit(): void {}
  
  onConversationSelected(event: Patient) {
    console.log('current event', event);
    this.patient = event;
    console.log('currentItem', this.patient);
  }
}
