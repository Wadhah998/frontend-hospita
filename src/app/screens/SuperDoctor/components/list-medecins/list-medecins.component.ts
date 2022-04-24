import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/services/shared/dialog.service';
import { ApiService } from 'src/app/services/api/api.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { MedecinFormComponent } from 'src/app/screens/form/medecin-form/medecin-form.component';
import { ProfileComponent } from 'src/app/screens/form/profile/profile.component';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.scss'],
})
export class ListMedecinsComponent implements OnInit {
  medecins: Medecins[] = [];

  selectedSpeciality!: boolean;

  ngOnInit(): void {
    this.getAllMedecins();
  }

  medecinForm!: FormGroup;
  displayedColumns: string[] = [
    'action',
    'telephone',
    'email',
    'speciality',
    'cin',
    'gouvernat',
    'nom',
    'id',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {}

  ajouterMedecinDialog() {
    this.dialog
      .open(MedecinFormComponent, {
        width: '50%',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'تأكيد') {
          this.getAllMedecins();
        }
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

  deleteMedecin(id: number) {
    this.dialogService
      .openConfirmDialog('هل أنت متأكد أنك تريد حذف هذا الطبيب؟')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.api.deleteMedecin(id).subscribe({
            next: (res) => {
              alert('حذف الدكتور بنجاح');
              this.getAllMedecins();
            },
            error: () => {
              alert('خطأ اثناء حذف هذا الطبيب !!');
            },
          });
        }
      });
  }

  showMedecin(row: any) {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '20%',
      data: row,
      autoFocus: true,
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

  getAllMedecins() {
    this.api.getMedecin().subscribe({
      next: (res) => {
        console.log(res);
        this.medecins = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        alert('خطأ أثناء جلب السجلات');
      },
    });
  }

  afficherTousMedecin() {
    this.getAllMedecins();
  }
}
