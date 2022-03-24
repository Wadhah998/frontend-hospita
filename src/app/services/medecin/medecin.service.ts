import { Medecins } from './../../Profiles';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../api.service';
import { Medecin } from './../../models/medecin/medecin';
import { Injectable, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  medecins : Medecins []= [];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private api : ApiService) { }


  getOneMedecin (nom : string){
    this.api.getSingleMedecin(nom)
    .subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:()=>{
        alert("!!")
      }
    })
  }
  

  getAllMedecins () {
    this.api.getMedecin()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.medecins = res
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:(error)=>{
          alert("خطأ أثناء جلب السجلات")
        }
      })
  }

 

 

}
