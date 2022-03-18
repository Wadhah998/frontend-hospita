import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  bgImage:string = "assets/images/image4.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
