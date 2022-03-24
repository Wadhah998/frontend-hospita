import { SharedService } from './../../services/shares/shared.service';
import { Medecins } from './../../Profiles';
import { Router, ActivatedRoute } from '@angular/router';
import { Dialog1Component } from './../../dialog1/dialog1.component';
import { ApiService } from './../../services/api.service';
import {  FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MedecinService } from './../../services/medecin/medecin.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-super-doctor',
  templateUrl: './super-doctor.component.html',
  styleUrls: ['./super-doctor.component.scss']
})
export class SuperDoctorComponent implements OnInit {

  medecins : Medecins []= [];
  singleMedecin : Medecins [] = [];
  id! : number;


  ngOnInit(): void {
    this.getAllMedecins();
  }

  medecinForm! : FormGroup;
  displayedColumns: string[] = ['action','telephone', 'email','speciality','cin','nom','id' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private sharedService : SharedService,
    private api : ApiService,
    private dialog : MatDialog, 
    private formBuilder : FormBuilder, 
    private router: Router, 
    private activatedRouter : ActivatedRoute,
    private medecinService : MedecinService,
    private activatedRoutes: ActivatedRoute
    ) { }
    


  openDialog() {
    this.dialog.open(Dialog1Component, {
      width:'60%',
      disableClose:true,
      autoFocus :true
      

    }).afterClosed().subscribe(val=>{
      if(val=='تأكيد'){
        this.getAllMedecins();
      }
    });
  }


  editMedecin(row : any) {
    this.dialog.open(Dialog1Component,{
      width : '50%',
      data:row,
      disableClose:true,
      autoFocus :true
    }).afterClosed().subscribe(val=>{
      if(val==='تحديث'){
        this.getAllMedecins();
      }
    });
  }

  deleteMedecin(id:number){
    this.api.deleteMedecin(id)
    .subscribe({
      next:(res)=>{
        alert("حذف الدكتور بنجاح")
        this.getAllMedecins();
      },
      error:()=>{
        alert("Error!!")
      }
    })
  }


  getId(nom: string){
    this.api.getSingleMedecin(nom)
    .subscribe({
      next:(res)=>{
        this.singleMedecin = res;
      },
      error:()=>{
        alert("erreur!!")
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
