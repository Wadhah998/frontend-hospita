import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Component, OnInit,EventEmitter , Output, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/services/shared/dialog.service';
import { ApiService } from 'src/app/services/api/api.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';

import { Maitre } from 'src/app/models/maitre/maitre';
import { AjouterMaitreComponent } from '../../forms/ajouter-maitre/ajouter-maitre.component';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';

@Component({
  selector: 'app-liste-maitres',
  templateUrl: './liste-maitres.component.html',
  styleUrls: ['./liste-maitres.component.scss']
})
export class ListeMaitresComponent extends DynamicTableCrud<any> implements OnInit {

  maitres : Maitre []= [];
  maitre!: Maitre;

  @Output()
  public select: EventEmitter<Maitre> = new EventEmitter();

  selectedSpeciality!: boolean;

  ngOnInit(): void {
    this.getData();
  }

  maitreForm!: FormGroup;
  displayedColumns: string[] = [
    'action',
    'telephone',
    'email',
    
    'cin',
    'gouvernat',
    'nom',
    'id',
  ];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public router:Router,
    service:AbstractRestService<any>,
    secureStorageService : SecureStorageService,
    private api: ApiService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private _snackBar: MatSnackBar
    
  ) {super(  service, 'http://localhost:8000/api/persons', secureStorageService)}

  ajouterMaitreDialog() {
    this.dialog
      .open(AjouterMaitreComponent, {
        width: '50%',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe(async (val) => {
        if (val == 'تأكيد') {
         await this.getData();
        }
      });
  }

  editMaitre(row: any) {
    this.dialog
      .open(AjouterMaitreComponent, {
        width: '50%',
        data: row,
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe((val) => {
      
          // this.router.navigate([''])
         // .then(async () => {
            console.log('catched');
             this.getData()
           
          });
       // });
  }

  // deleteMaitre(id: number) {
  //   this.dialogService
  //     .openConfirmDialog('هل أنت متأكد أنك تريد حذف هذا الرئيسي؟')
  //     .afterClosed()
  //     .subscribe((res) => {
  //       if (res) {
  //         this.api.deleteMaitre(id).subscribe({
  //           next: (res) => {
  //             this._snackBar.open('تم حذف المعلم بنجاح','',
  //   { 
  //     duration: 3000
  // });
  //             this.getData();
  //           },
  //           error: () => {
  //             this._snackBar.open('خطأ في حذف هذا المعلم !!','',
  //   { 
  //     duration: 3000
  // });
  //           },
  //         });
  //       }
  //     });
  // }


  /*showMedecin(row: any){
    const dialogRef = this.dialog.open(ProfileDoctorComponent,{
      width : '32%',
      data:row,
      autoFocus :true,

    });
    setTimeout(() => {
      dialogRef.close();
    }, 15000);
  }*/

  chercheMaitre($event: any) {
    let filteredData = _.filter(this.maitres, (item) => {
      return item.ecole.toLowerCase() == $event.value.toLowerCase();
    });
    this.dataSource = new MatTableDataSource(filteredData);
  }

  // getAllMaitres () {
  //   this.api.getMaitre()
  //     .subscribe({
  //       next:(res)=>{
  //         console.log(res);
  //         this.maitres = res
  //         this.maitre = this.maitres[0];
  //         this.dataSource = new MatTableDataSource(res);
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //         this.select.emit(this.maitre)
  //       },
  //       error:(error)=>{
  //         //alert("خطأ أثناء جلب السجلات")
  //       }
  //     })
  // }

  afficherTousMaitre() {
    this.getData();
  }

  onSelect(element: Maitre) {
    // this.selectedtIndex = index;
    this.maitre = element;
    console.log('from list', this.maitres);
    this.select.emit(element);
    
    console.log('from list', element);
  }


}