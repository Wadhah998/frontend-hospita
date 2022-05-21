import { Component, OnInit } from '@angular/core';
import { Maitre } from 'src/app/models/maitre/maitre';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-ecole-dashboard',
  templateUrl: './ecole-dashboard.component.html',
  styleUrls: ['./ecole-dashboard.component.scss']
})
export class EcoleDashboardComponent implements OnInit {

  maitre!: Maitre;
  id: number = 0;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }


  onLogin(event: any) {
    console.log('current event', event);
    console.log(this.id);
    this.maitre = event;
    // this.patientItem = this.getSinglePatient(event);
    console.log('currentItem', this.maitre);
  }

}
