import { MedecinService } from './../../services/medecin/medecin.service';
import { Medecin } from './../../models/medecin/medecin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-medecin',
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.scss']
})
export class AjouterMedecinComponent implements OnInit {

  medecin!: Medecin;

  constructor(private route : ActivatedRoute,
     private userService : MedecinService, 
     private router : Router) { }

  ngOnInit(): void {
  }

}
