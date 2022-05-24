import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecins, message } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';

@Component({
  selector: 'app-doctor-chat',
  templateUrl: './doctor-chat.component.html',
  styleUrls: ['./doctor-chat.component.scss']
})
export class DoctorChatComponent implements OnInit {

  @Input()
  public patient!: any;

  
  constructor() { }


  ngOnInit(): void {
  }


  SubmitMessage(event : any){
    let value = event.target.value.trim();
    event.target.value = '';


    this.patient.latestMessage = value;
    this.patient.messages.push({
      id:1,
      body:value,
      time:'10:21',
      me:true,
    });
  }
 

}
