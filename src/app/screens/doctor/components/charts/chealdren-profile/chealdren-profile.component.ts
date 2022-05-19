import { Component, OnInit,Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';

@Component({
  selector: 'app-chealdren-profile',
  templateUrl: './chealdren-profile.component.html',
  styleUrls: ['./chealdren-profile.component.scss'],
})
export class ChealdrenProfileComponent implements OnInit {
  @Input() patient!: Patient;
  img: string = './assets/images/users/user-1.jpg';
  constructor() {}

  ngOnInit(): void {}
}
