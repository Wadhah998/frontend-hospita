import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { message } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Output()
  public conversation: EventEmitter<Patient> = new EventEmitter();
  patients: Patient[] = [];
  userName: string = '';

  patient!: Patient;
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
  
    this.api.getPatients().subscribe({
      next: (res) => {
        this.patients = res;
        console.log(this.patients);
        this.patient = this.patients[0];
        console.log(this.patient);
        this.conversation.emit(this.patient);
      },
    });
  }
    getMessage()
    {
      this.api.getmessagePatient(this.message).subscribe({
        next: (res) => {
          this.message = res;
          console.log(this.patients);
          this.message = this.message.body;
          console.log(this.patient);
          this.conversation.emit(this.message);
        },
      });
    }
  onSelect(item: Patient) {
    // this.selectedtIndex = index;
    this.patient = item;
    //this.message=m;
    console.log('from list', this.patient);
    this.conversation.emit(item);
  //  this.Messenger.emit(m);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }
}
