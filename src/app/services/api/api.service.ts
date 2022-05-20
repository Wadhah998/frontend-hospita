
import { Medecins, message } from './../../models/medecin/Profiles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { Patient } from './../../models/patient/patient.model';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { User_parent } from 'src/app/screens/sign-up/user';
export interface Token{
  access: string;
  refresh: string;
  userId: number;
  typeUser: string;
  name: string;
  familyName: string | undefined;
}

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}
  postMedecin(data: any) {
    return this.http.post<Medecins[]>(
      'http://localhost:3000/listMedecins/',
      data
    );
  }
   login(loginNumber: string, password: string): Promise<any> {
    return this.http.post<Token>(`http://localhost:8000/api/persons/login`, {loginNumber, password}).toPromise();
}
public signup(person: User_parent): Promise<void> {
  return this.http.post<void>(`http://localhost:8000/api/persons/signup`, person).toPromise();
}
  postuser(data: any) {
    return this.http.post<User[]>('http://localhost:3000/listUsers/', data);
  }
  getuser() {
    return this.http.get<any[]>('http://localhost:8000/api/persons');
  }

  getMedecin() {
    return this.http.get<Medecins[]>('http://localhost:3000/listMedecins/');
  }

  putMedecin(data: any, id: number) {
    return this.http.put<Medecins[]>(
      'http://localhost:3000/listMedecins/' + id,
      data
    );
  }
  putuser(data: any, id: number) {
    return this.http.put<User[]>('http://localhost:3000/listUsers/' + id, data);
  }

  deleteMedecin(id: number) {
    return this.http.delete<Medecins[]>(
      'http://localhost:3000/listMedecins/' + id
    );
  }
  getSingleMedecin(id: number) {
    return this.http.get<Medecins[]>(
      'http://localhost:3000/listMedecins/' + id
    );
  }
  getPatients() {
    return this.http.get<Patient[]>('http://localhost:3000/listPatients/');
  }
  getSinglePatient(id: number) {
    return this.http.get<Patient>('http://localhost:3000/listPatients/' + id);
  }
  deleteuser(id: number) {
    return this.http.delete<User[]>('http://localhost:3000/listUsers/' + id);
  }
  uploadFile(file: File) {}
  deletePatient(id: number) {
    return this.http.delete<Patient[]>(
      'http://localhost:3000/listPatients/' + id
    );

    }
  

  getmessage(m:message){
    return this.http.get<message[]>("http://localhost:3000/listMedecins/"+m);
  }



  getEnfant() {
    return this.http.get<Enfants[]>('http://localhost:3000/listEnfants/');
  }

  deleteEnfants(id: number){
    return this.http.delete<Enfants[]>(
      'http://localhost:3000/listEnfants/' + id
    );
  }

  postEnfant(data: any) {
    return this.http.post<Enfants[]>(
      'http://localhost:3000/listEnfants/',
      data
    );
  }

  putEnfant(data:any, id : number){
    return this.http.put<Enfants[]>("http://localhost:3000/listEnfants/"+id, data)
    
  }
}
