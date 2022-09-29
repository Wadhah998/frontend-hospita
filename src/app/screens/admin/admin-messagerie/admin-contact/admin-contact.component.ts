import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Medecins, message } from 'src/app/models/medecin/Profiles';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {

  @Output()
  public conversation: EventEmitter<Medecins> = new EventEmitter();
  medecins: Medecins[] = [];
  userName: string = '';

  medecin!: Medecins;
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
  
    this.api.getMedecin().subscribe({
      next: (res) => {
        this.medecins = res;
        console.log(this.medecins);
        this.medecin = this.medecins[0];
        console.log(this.medecin);
        this.conversation.emit(this.medecin);
      },
    });
  }
    getMessage()
    {
      this.api.getmessage(this.message).subscribe({
        next: (res) => {
          this.message = res;
          console.log(this.medecins);
          this.message = this.message.body;
          console.log(this.medecin);
          this.conversation.emit(this.message);
        },
      });
    }
  onSelect(item: Medecins) {
    
    this.medecin = item;
    
    console.log('from list', this.medecin);
    this.conversation.emit(item);
  
    console.log('from list', item);
  }


}
