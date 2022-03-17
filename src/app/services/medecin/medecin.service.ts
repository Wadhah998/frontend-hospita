import { Medecin } from './../../models/medecin/medecin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  listmedecins: Medecin[] = [
    {id: 1, nom: 'Dr.Indigo Violet', etat: 'Sfax', email: 'test@gmail.com', number: 12345678, telephone: 12345677},
    {id: 2, nom: 'Dr.Justin Case', etat: 'Sfax', email: 'test@gmail.com', number: 12345678, telephone: 12345677},
    {id: 3, nom: 'Dr.Hilary Ouse', etat: 'Sfax', email: 'test@gmail.com', number: 12345678, telephone: 12345677},
    {id: 4, nom: 'Dr.Archibald', etat: 'Sfax', email: 'test@gmail.com', number: 12345678, telephone: 12345677}
  ];

  constructor() { }

  getUser(){
    return this.listmedecins.slice();
  }

  getSingleMedecin(id: number){
    const medecin = this.listmedecins.find(
      (medecinObject) => {
          return medecinObject.id===id;
      }
  );

   return medecin ;
  }

  removeUsers(index:number){
    this.listmedecins.splice(index, 1);

  }

  addMedecin(nouveauMedecin : Medecin){
    this.listmedecins.push(nouveauMedecin);
  }
}
