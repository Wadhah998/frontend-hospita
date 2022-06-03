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
import { Medecins } from 'src/app/models/medecin/Profiles';
import { MedecinFormComponent } from 'src/app/screens/form/medecin-form/medecin-form.component';
import { ProfileDoctorComponent } from '../profile-doctor/profile-doctor.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.scss'],
})
export class ListMedecinsComponent extends DynamicTableCrud<any> implements OnInit {

  medecins : Medecins []= [];
  medecin!: Medecins;

  @Output()
  public select: EventEmitter<Medecins> = new EventEmitter();

  selectedSpeciality!: boolean;

  ngOnInit(): void {
    this.getData();
  }

  medecinForm!: FormGroup;
  displayedColumns: string[] = [
    'action',
    'telephone',
    'email',
    'speciality',
    'cin',
    
    'nom',
    'id',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    service:AbstractRestService<any>,
    secureStorageService : SecureStorageService,
    private api: ApiService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    
    private router: Router,
    private _snackBar: MatSnackBar,
    
  ) {super(  service, 'http://localhost:8000/api/persons', secureStorageService)}

  ajouterMedecinDialog() {
    this.dialog
      .open(MedecinFormComponent, {
        width: '50%',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe(async (val) => {
        this.router.navigate(['/superDoctorDashboard'])
        .then(async () => {
         
          console.log('catched');
          this.getData()
      });
      });
  }

  editMedecin(row: any) {
    this.dialog
      .open(MedecinFormComponent, {
        width: '50%',
        data: row,
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'تحديث') {
          this.getAllMedecins();
        }
      });
  }

  // deleteMedecin(id: number) {
  //   this.dialogService
  //     .openConfirmDialog('هل أنت متأكد أنك تريد حذف هذا الطبيب؟')
  //     .afterClosed()
  //     .subscribe((res) => {
  //       if (res) {
  //         this.api.deleteMedecin(id).subscribe({
  //           next: (res) => {
  //             this._snackBar.open('حذف الدكتور بنجاح','',
  //   { 
  //     duration: 3000
  // });
  //             this.getAllMedecins();
  //           },
  //           error: () => {
  //             this._snackBar.open('خطأ اثناء حذف هذا الطبيب !!','',
  //   { 
  //     duration: 3000
  // });
  //           },
  //         });
  //       }
  //     });
  // }


  showMedecin(row: any){
    const dialogRef = this.dialog.open(ProfileDoctorComponent,{
      width : '32%',
      data:row,
      autoFocus :true,

    });
    setTimeout(() => {
      dialogRef.close();
    }, 15000);
  }

  chercheMedecin($event: any) {
    let filteredData = _.filter(this.medecins, (item) => {
      return item.speciality.toLowerCase() == $event.value.toLowerCase();
    });
    this.dataSource = new MatTableDataSource(filteredData);
  }

  getAllMedecins () {
    this.api.getMedecin()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.medecins = res
          this.medecin = this.medecins[0];
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.select.emit(this.medecin)
        },
        error:(error)=>{
          //alert("خطأ أثناء جلب السجلات")
        }
      })
  }

  afficherTousMedecin() {
    this.getData();
  }

  onSelect(element: Medecins) {
    // this.selectedtIndex = index;
    this.medecin = element;
    console.log('from list', this.medecins);
    this.select.emit(element);
    //console.log('from list' + this.gePatients());
    console.log('from list', element);
  }



}