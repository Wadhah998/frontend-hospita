import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
import { Messages } from './../../../../../models/messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input()
  public patient!: Patient;
  conversations: Messages[] = [
    { id:1,author: 'imed', to: 'patient', time: '10:17', message: 'hello' },
    { id:2, author: 'ahmed', to: 'patient', time: '10:17', message: 'hello world' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
