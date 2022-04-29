import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Medecins, message } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output()
  public conversation: EventEmitter<Medecins> = new EventEmitter();
  medecins: Medecins[] = [];
  userName: string = '';

  medecin!: Medecins;
  message! : any;
  options: Object = { direction: 'ltr' };
  constructor(public api: ApiService) {}
  ngOnInit(): void {
    this.getMedecins();
    this.getMessage();
  }

  @Output()
  public Messenger: EventEmitter<message> = new EventEmitter();
 

  
  getMedecins() {
  
    this.api.getMedecin().subscribe({
      next: (res) => {
        this.medecins = res;
        console.log(this.medecins);
        this.medecin = this.medecins[0];
        console.log(this.medecin);
        this.conversation.emit(this.medecin);
      },
    });
  }
    getMessage()
    {
      this.api.getmessage(this.message).subscribe({
        next: (res) => {
          this.message = res;
          console.log(this.medecins);
          this.message = this.message.body;
          console.log(this.medecin);
          this.conversation.emit(this.message);
        },
      });
    }
  onSelect(item: Medecins) {
    // this.selectedtIndex = index;
    this.medecin = item;
    //this.message=m;
    console.log('from list', this.medecin);
    this.conversation.emit(item);
  //  this.Messenger.emit(m);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }

}
