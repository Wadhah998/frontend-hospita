import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  User_parent } from './user';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';






@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 public user : User_parent= new User_parent()
 public registerForm!: FormGroup;
  constructor( private router: Router, private fb: FormBuilder, private http :HttpClient) { }

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

  onSignin(){
    this.router.navigateByUrl(``);
  }
  
  onSignup(){
    this.http.post<any>("http://localhost:3000/listUsers/",this.user)
    .subscribe(res=>{
      alert("c bon");
      this.router.navigate(['admin']);
    },err=>{
      alert("cest pas bon")
    })
    
    
  }
  onForget(): void{
  
  }

  

  hide = true;
 
}


