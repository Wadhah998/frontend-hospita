import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.scss']
})
export class ParentDashboardComponent implements OnInit {
 

  constructor(private router : Router) { }

  ajout(): void {
    this.router.navigateByUrl('commingSoon');

  }
  ngOnInit(): void {

  }

  diagnostic() {
    this.router.navigate(['ajout-enfant'])
    localStorage.setItem('periode',"1");
  }

  grossesseForm(){
    this.router.navigate(['ajout-enfant'])
    localStorage.setItem('periode', JSON.stringify("2"));
  }
}
