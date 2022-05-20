import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.scss']
})
export class AjoutEnfantComponent implements OnInit {

  constructor(private router: Router) {
    
  }
    changementDePage(): void {
      this.router.navigateByUrl('');
   };

  ngOnInit(): void {
  }

}
