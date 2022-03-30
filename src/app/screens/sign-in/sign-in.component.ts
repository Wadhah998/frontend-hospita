import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {



  
  public user: User = new User();
  constructor(private router: Router) {
  }

  ngOnInit() {

  }
 

  onSignin(): void {
    this.router.navigate([''])

  }
  
  onSignup(): void {
  this.router.navigate([`signup`]);

  }
  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    console.log('hello');
  }

 
}
