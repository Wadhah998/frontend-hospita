import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm! : FormGroup;
  actionBtn : string = "تأكيد";
  formBuilder: any;
  constructor() { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      telephone: ['', Validators.required], 
      email : ['', Validators.required],
      cin: ['', Validators.required],
      speciality: ['', Validators.required],
      nom: ['', Validators.required],
      password:['', Validators.required],
      id: ['', Validators.required]
  })

  }}
