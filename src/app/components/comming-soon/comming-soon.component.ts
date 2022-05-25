import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})

export class CommingSoonComponent implements OnInit {

  constructor() { }

  emailForm !: FormGroup;

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      
      email:new FormControl ('', [Validators.required, Validators.email]),
     });    
  }

}
