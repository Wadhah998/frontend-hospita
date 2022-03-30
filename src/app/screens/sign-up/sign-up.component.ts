import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';






@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 public user : User = new User(); 
 public registerForm!: FormGroup;
  constructor( private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom: '',
      prenom: ['', Validators.minLength(4)],
      cin: '' ,
      tel:'',
      email: ['', Validators.email ] ,
      mdp: ['',
       ],
      mdpp:'',
      gouv:'',
      pos:'',
      check:''
    },
    )
}

  onSignin(): void {
    this.router.navigateByUrl(``);
  }
  
  onSignup(): void {
    
    
  }
  onForget(): void{
  
  }

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    console.log('hello');
  }

  hide = true;
 
}


