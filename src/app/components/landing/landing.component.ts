import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  bgImage: string = 'assets/images/image4.jpg';

  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    // loop: true,
    //  autoplay: true,
    center: true,
    // dots: true,
    autoHeight: true,
    autoWidth: true,
    // nav: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  constructor() {}

  ngOnInit() {}
}
