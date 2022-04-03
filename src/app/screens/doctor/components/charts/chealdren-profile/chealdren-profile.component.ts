import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chealdren-profile',
  templateUrl: './chealdren-profile.component.html',
  styleUrls: ['./chealdren-profile.component.scss'],
})
export class ChealdrenProfileComponent implements OnInit {
  img: string = './assets/images/users/user-1.jpg';
  constructor() {}

  ngOnInit(): void {}
}
