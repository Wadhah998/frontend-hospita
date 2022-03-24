import { Medecins } from './../Profiles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  postMedecin(data: any){
    return this.http.post<Medecins[]>("http://localhost:3000/listMedecins/", data);
  }

  getMedecin (){
    return this.http.get<Medecins[]>("http://localhost:3000/listMedecins/");
  }

  putMedecin(data:any, id : number){
    return this.http.put<Medecins[]>("http://localhost:3000/listMedecins/"+id, data)
  }

  deleteMedecin(id:number){
    return this.http.delete<Medecins[]>("http://localhost:3000/listMedecins/"+id);
  }
  getSingleMedecin(nom:string){
    return this.http.get<Medecins[]>("http://localhost:3000/listMedecins/"+nom);
  }

}
