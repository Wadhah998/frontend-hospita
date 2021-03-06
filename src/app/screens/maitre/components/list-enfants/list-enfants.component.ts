import { Router } from '@angular/router';
import { AbstractRestService } from 'src/app/services/genericservice.service';

import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import { DialogService } from 'src/app/services/shared/dialog.service';
import { ApiService } from 'src/app/services/api/api.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

import { AjouterEnfantComponent } from '../../forms/ajouter-enfant/ajouter-enfant.component';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { ProfilEnfantsComponent } from '../profil-enfants/profil-enfants.component';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';


@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrls: ['./list-enfants.component.scss']
})
export class ListEnfantsComponent extends DynamicTableCrud<any> implements OnInit {

  enfants : Enfants []= [];

  enfant !: Enfants;

  selectedSpeciality!: boolean;
   
  ngOnInit(): void {
    this.getData();
    
  }

  enfantForm! : FormGroup;
  displayedColumns: string[] = ['action','telephone', 'email','situation','date','nomEnfant','id' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output()
  public select: EventEmitter<Enfants> = new EventEmitter()

  constructor(
    private api : ApiService,
    private dialog : MatDialog, 
    private dialogService : DialogService,
    service : AbstractRestService<any>,
    secureStorageService:SecureStorageService,
     public router:Router,
    ) {super(service, 'http://localhost:8000/api/patients', secureStorageService) }
    


    ajouterEnfantDialog() {
   this.router.navigate(['/commingSoon'])
  }


  editEnfant(row : any) {
    this.dialog.open(AjouterEnfantComponent,{
      width : '50%',
      data:row,
      disableClose:true,
      autoFocus :true
    }).afterClosed().subscribe(val=>{
      if(val==='??????????'){
        this.getAllEnfants();
      }
    });
  }

  deleteEnfant(id:number){

    this.dialogService.openConfirmDialog('???? ?????? ?????????? ?????? ???????? ?????? ????????????????  ??')
    .afterClosed().subscribe(res =>{
      if(res){
        this.api.deleteEnfants(id)
    .subscribe({
      next:(res)=>{
        alert("?????? ??????????  ??????????")
        this.getAllEnfants();
      },
      error:()=>{
        alert("?????? ?????????? ?????? ?????? ??????????   !!")
      }
    })
      }
    })
    
  }

  showEnfant(row: any){
    const dialogRef = this.dialog.open(ProfilEnfantsComponent,{
      width : '32%',
      data:row,
      autoFocus :true,

    });
   
  }





  getAllEnfants(){
    this.api.getEnfant()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.enfants = res
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:(error)=>{
          alert("?????? ?????????? ?????? ??????????????")
        }
      })
  }

  afficherTousEnfant(){
    this.getAllEnfants();
  }

  onSelect(element: Enfants) {
    // this.selectedtIndex = index;
    this.enfant = element;
    console.log('from list', this.enfants);
    this.select.emit(element);
    //console.log('from list' + this.gePatients());
    console.log('from list', element);
  }
}
