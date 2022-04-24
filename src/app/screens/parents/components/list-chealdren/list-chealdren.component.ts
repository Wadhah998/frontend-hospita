import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from 'src/app/screens/mat-confirm-dialog/mat-confirm-dialog.component';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';

@Component({
  selector: 'app-list-chealdren',
  templateUrl: './list-chealdren.component.html',
  styleUrls: ['./list-chealdren.component.scss'],
})
export class ListChealdrenComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'state',
    'email',
    'phone',
    'action',
  ];
  Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  constructor(private api: ApiService, public dialog: MatDialog) {}
  patients: Patient[] = [];
  dataSource!: MatTableDataSource<any>;
  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.api.getPatients().subscribe({
      next: (res) => {
        console.log(res);
        this.patients = res;
        this.dataSource = new MatTableDataSource(res);
        /*  this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; */
      },
      error: (error) => {
        alert('خطأ أثناء جلب السجلات');
      },
    });
  }

  deletePatient(id: number) {
    Swal.fire({
      title: 'هل أنت متأكد أنك تريد حذف هذا الطبيب؟',
      // text: 'هل أنت متأكد أنك تريد حذف هذا الطبيب؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'حذف',
      cancelButtonText: 'إلغاء',
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      //position:
    }).then((result) => {
      if (result.value) {
        this.api.deletePatient(id).subscribe({
          next: (res) => {
            Swal.fire({
              toast: true,
              icon: 'success',
              title: 'تمت عملية الحذف بنجاح',
              iconColor: 'white',
              //position: 'top-center',
              showConfirmButton: false,
              timer: 3000,
              customClass: {
                popup: 'colored-toast',
              },
            });
            this.getPatients();
          },
        });
      }
    });
  }
}
