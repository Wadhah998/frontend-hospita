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

  putMedecin(data: any, id: number) {
    return this.http.put<Medecins[]>(
      'http://localhost:3000/listMedecins/' + id,
      data
    );
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
}
