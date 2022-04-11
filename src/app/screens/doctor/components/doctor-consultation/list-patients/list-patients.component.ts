import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
})
export class ListPatientsComponent implements OnInit {
  @Output()
  public select: EventEmitter<Patient> = new EventEmitter();
  status: boolean = false;
  patients: Patient[] = [];
  //selectedtIndex: number = 0;
  patient!: Patient;
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
        this.select.emit(this.patient);
      },
    });
  }
  onSelect(item: Patient) {
    // this.selectedtIndex = index;
    this.patient = item;
    console.log('from list', this.patient);
    this.select.emit(item);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }
}
