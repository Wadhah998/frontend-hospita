import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


  public user: User = new User();
  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  onSignup(): void {
    

  }
  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    console.log('hello');
  }

}
