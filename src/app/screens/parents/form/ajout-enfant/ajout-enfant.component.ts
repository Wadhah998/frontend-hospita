import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.scss']
})
export class AjoutEnfantComponent implements OnInit {
  formGroup !: FormGroup;
  validated = true;
  typeUser !: string | null;
  error !: boolean;

  constructor(private router: Router,private patientService: AbstractRestService<any>,public secureStorageService:SecureStorageService) {
    
  }
   

  ngOnInit(): void {
    this.typeUser = localStorage.getItem('typeUser');
    this.formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        familyName: new FormControl('', [Validators.required]),
        birthdate: new FormControl('', [Validators.required]),
    });
    if (localStorage.getItem('typeUser') !== 'parent')
    {
       this.formGroup.addControl('parentCin', new FormControl('', [Validators.required]));
    }
  }
 changementDePage(): void {
      localStorage.setItem('patient', JSON.stringify(this.formGroup.value));
      let access = localStorage.getItem('access');
                if (access) {
                    access = this.secureStorageService.getToken(access);
                }
      this.patientService.create(`http://localhost:8000/api/patients`, this.formGroup.value, {headers: {Authorization: `Bearer ${access}`}})
   };
}
