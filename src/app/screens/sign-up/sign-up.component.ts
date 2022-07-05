import { ApiService } from './../../services/api/api.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User_parent } from './user';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  AbstractControl,
  MinLengthValidator,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public user: User_parent = new User_parent();
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    familyName: new FormControl(''),
    telephone: new FormControl(''),
    loginNumber: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    governorate: new FormControl(''),
    delegation: new FormControl(''),
    zipCode: new FormControl(''),
  });
  submitted = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    public ApiService: ApiService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.minLength(8)]],
      loginNumber: ['', [Validators.required,Validators.maxLength(12),Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      Confmdp: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      governorate: ['', Validators.required],
      delegation: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSignin(event: any) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));
    event.preventDefault();
    this.ApiService.signup({
      name: this.registerForm.value.name,
      familyName: this.registerForm.value.familyName,
      loginNumber: this.registerForm.value.loginNumber,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telephone: this.registerForm.value.telephone,
      typeUser: 'parent',
      localisation: {
        governorate: this.registerForm.value.governorate,
        delegation: this.registerForm.value.delegation,
        zipCode: this.registerForm.value.zipCode,
      },
    })
      .then(async () => {
        await this.router.navigate(['/parent-dashboard']);
      })
      .catch((err: Error) => {
        console.log(err);
        Swal.fire('رقم تسجيل موجود')

      });
  }

  onForget(): void {}

  hide = true;
}
