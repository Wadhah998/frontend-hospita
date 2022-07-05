import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-parent-messagerie',
  templateUrl: './parent-messagerie.component.html',
  styleUrls: ['./parent-messagerie.component.scss']
})
export class ParentMessagerieComponent implements OnInit {

  @Input()
  //public patient;
  medecin!: Medecins;
  constructor() {}

  ngOnInit(): void {}
  //backgroundUrl = './assets/images/whatsbackground.webp';
  onConversationSelected(event: Medecins) {
    console.log('current event', event);
    this.medecin = event;
    console.log('currentItem', this.medecin);
  }

}
