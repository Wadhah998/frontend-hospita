import { Component, OnInit } from '@angular/core';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-maitredashboard',
  templateUrl: './maitredashboard.component.html',
  styleUrls: ['./maitredashboard.component.scss']
})
export class MaitredashboardComponent implements OnInit {

  enfant!: Enfants;
  id: number = 0;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }


  onLogin(event: Enfants) {
    console.log('current event', event);
    console.log(this.id);
    this.enfant = event;
    // this.patientItem = this.getSinglePatient(event);
    console.log('currentItem', this.enfant);
  }


}
