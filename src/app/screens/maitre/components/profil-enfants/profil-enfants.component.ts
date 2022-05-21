
import { Component, Inject, Input, OnInit } from '@angular/core';

import { Enfants } from 'src/app/models/enfant/Enfant';

@Component({
  selector: 'app-profil-enfants',
  templateUrl: './profil-enfants.component.html',
  styleUrls: ['./profil-enfants.component.scss']
})
export class ProfilEnfantsComponent {

  @Input()
  public enfant!: any;

}
