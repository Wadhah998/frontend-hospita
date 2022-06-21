import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient/patient.model';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from 'src/app/screens/mat-confirm-dialog/mat-confirm-dialog.component';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-chealdren',
  templateUrl: './list-chealdren.component.html',
  styleUrls: ['./list-chealdren.component.scss'],
})
export class ListChealdrenComponent extends DynamicTableCrud<any> implements OnInit {
  access !: string | null;
  numberPatients !: number;
  typeUser !: string | null;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'name',
    
    'state',
    'age',
    
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
  constructor(private api: ApiService, public dialog: MatDialog, service:AbstractRestService<any>,secureStorageService:SecureStorageService) 
  {super(service, 'http://localhost:8000/api/patients', secureStorageService)}
  patients: Patient[] = [];
  dataSource!: MatTableDataSource<any>;
  async ngOnInit(): Promise<void> {
    this.access = localStorage.getItem('access');
    const typeUser = localStorage.getItem('typeUser');
    if (typeUser !== null){
        this.typeUser = typeUser;
    }
    if (this.access) {
        this.options = {
            params: null,
            headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
        };
        await this.getData();
        console.log(this.data);
    }

    
  }
  override async getData(): Promise<void> {
    this.data = await this.service.list(this.actionUrl, this.options);
    this.numberPatients = this.data.length;
}

 

 
}
