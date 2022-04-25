
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


@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrls: ['./list-enfants.component.scss']
})
export class ListEnfantsComponent implements OnInit {

  enfants : Enfants []= [];

  enfant !: Enfants;

  selectedSpeciality!: boolean;
   
  ngOnInit(): void {
    this.getAllEnfants();
    
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
    private dialogService : DialogService
    ) { }
    


    ajouterEnfantDialog() {
    this.dialog.open(AjouterEnfantComponent, {
      width:'50%',
      disableClose:true,
      autoFocus :true 
      

    }).afterClosed().subscribe(val=>{
      if(val=='تأكيد'){
        this.getAllEnfants();
      }
    });
  }


  editEnfant(row : any) {
    this.dialog.open(AjouterEnfantComponent,{
      width : '50%',
      data:row,
      disableClose:true,
      autoFocus :true
    }).afterClosed().subscribe(val=>{
      if(val==='تحديث'){
        this.getAllEnfants();
      }
    });
  }

  deleteEnfant(id:number){

    this.dialogService.openConfirmDialog('هل أنت متأكد أنك تريد حذف هذاالطفل  ؟')
    .afterClosed().subscribe(res =>{
      if(res){
        this.api.deleteEnfants(id)
    .subscribe({
      next:(res)=>{
        alert("حذف الطفل  بنجاح")
        this.getAllEnfants();
      },
      error:()=>{
        alert("خطأ اثناء حذف هذا الطفل   !!")
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
          alert("خطأ أثناء جلب السجلات")
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
