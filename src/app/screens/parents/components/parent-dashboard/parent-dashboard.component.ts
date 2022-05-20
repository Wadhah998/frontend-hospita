import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.scss']
})
export class ParentDashboardComponent implements OnInit {
 

  constructor(private router: Router) {}

  ajout(): void {
    this.router.navigateByUrl('ajout-enfant');

  }
  ngOnInit(): void {

  }

}
