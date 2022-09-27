import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecins, message } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
@Component({
  selector: 'app-ecole-chat',
  templateUrl: './ecole-chat.component.html',
  styleUrls: ['./ecole-chat.component.scss']
})
export class EcoleChatComponent implements OnInit {

  @Input()
  public medecin!: any;

  
  constructor() { }


  ngOnInit(): void {
  }


  SubmitMessage(event : any){
    let value = event.target.value.trim();
    event.target.value = '';


    this.medecin.latestMessage = value;
    this.medecin.messages.push({
      id:1,
      body:value,
      time:'10:21',
      me:true,
    });
  }

}
