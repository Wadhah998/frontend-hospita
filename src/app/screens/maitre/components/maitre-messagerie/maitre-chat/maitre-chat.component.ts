import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecins, message } from 'src/app/models/medecin/Profiles';
import { Patient } from 'src/app/models/patient/patient.model';
@Component({
  selector: 'app-maitre-chat',
  templateUrl: './maitre-chat.component.html',
  styleUrls: ['./maitre-chat.component.scss']
})
export class MaitreChatComponent implements OnInit {

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
