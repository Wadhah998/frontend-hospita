import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  options: Object = { direction: 'ltr' };
  constructor(public api: ApiService) {}
  ngOnInit(): void {
    this.gePatients();
  }
  gePatients() {
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
  onSelect(item: Patient) {
    // this.selectedtIndex = index;
    this.patient = item;
    console.log('from list', this.patient);
    this.conversation.emit(item);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }
}
