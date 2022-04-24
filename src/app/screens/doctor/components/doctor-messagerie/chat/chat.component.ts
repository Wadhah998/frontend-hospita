import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input()
  public patient!: Patient;
  constructor() {}

  ngOnInit(): void {}
}
