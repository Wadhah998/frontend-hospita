import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-maitre',
  templateUrl: './profile-maitre.component.html',
  styleUrls: ['./profile-maitre.component.scss']
})
export class ProfileMaitreComponent implements OnInit {

  @Input()
  public maitre!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
