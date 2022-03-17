import { MedecinService } from './../../../services/medecin/medecin.service';
import { Medecin } from './../../../models/medecin/medecin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.scss']
})
export class MedecinFormComponent implements OnInit {

  medecinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService : MedecinService, private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.medecinForm = this.formBuilder.group({
      telephone: ['', Validators.required],
      email : ['', [Validators.required], Validators.email],
      number: ['', Validators.required],
      etat: ['', Validators.required],
      nom: ['', Validators.required],
      id: ['', Validators.required],
    });
  }
  onSaveMedecin(){
    
      const telephone = this.medecinForm.get('telephone')?.value;
      const email = this.medecinForm.get('email')?.value;
      const number = this.medecinForm.get('number')?.value;
      const etat = this.medecinForm.get('etat')?.value;
      const nom = this.medecinForm.get('nom')?.value;
      const id = this.medecinForm.get('id')?.value;

      const newMedecin = new Medecin(telephone,email,number,etat,nom,id);

      this.userService.addMedecin(newMedecin)
    this.router.navigate(['/superdocwelcpage']);
  }

  annuler(){
    this.router.navigate(['/superdocwelcpage']);
  }


}
