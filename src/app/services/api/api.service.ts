import { Medecins } from './../../models/medecin/Profiles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { Patient } from './../../models/patient/patient.model';

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
  postuser(data: any) {
    return this.http.post<User[]>('http://localhost:3000/listUsers/', data);
  }
  getuser() {
    return this.http.get<User[]>('http://localhost:3000/listUsers/');
  }

  getMedecin() {
    return this.http.get<Medecins[]>('http://localhost:3000/listMedecins/');
  }

<<<<<<< HEAD
  putMedecin(data: any, id: number) {
    return this.http.put<Medecins[]>(
      'http://localhost:3000/listMedecins/' + id,
      data
    );
=======
  putMedecin(data:any, id : number){
    return this.http.put<Medecins[]>("http://localhost:3000/listMedecins/"+id, data)
    
  }
  putuser(data:any, id : number){
    return this.http.put<User[]>("http://localhost:3000/listUsers/"+id, data)
>>>>>>> 6620bc3bb7b1a8efbb6c62849c58b2dd7cb6c134
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
<<<<<<< HEAD
=======
  deleteuser(id:number){
    return this.http.delete<User[]>("http://localhost:3000/listUsers/"+id);
  }
  uploadFile(file : File){
  }

>>>>>>> 6620bc3bb7b1a8efbb6c62849c58b2dd7cb6c134
}
