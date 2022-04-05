import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-consultation',
  templateUrl: './doctor-consultation.component.html',
  styleUrls: ['./doctor-consultation.component.scss'],
})
export class DoctorConsultationComponent implements OnInit {
  pageTitle: string = 'تشخيص المرضى';
  constructor() {}

  ngOnInit(): void {}
}
