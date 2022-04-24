import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user/user.module';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../form/user-form/user-form.component';
import * as _ from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isSuperDoctor!: boolean;
  formGroup!: FormGroup;
  displayPerson = false;
  typeDisplayedPerson!: string;
  listUsers: User[] = [];
  selected!: string;
  displayedColumns: string[] = [
    'modifier',
    'password',
    'loginNumber',
    'email',
    'telephone',
    'nom',
    'TypeUser',
    'id',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    public api: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getallusers();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getallusers() {
    this.api.getuser().subscribe({
      next: (res) => {
        this.listUsers = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  openUserDialog(): void {
    this.dialog
      .open(UserFormComponent, {
        width: '60%',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe((val) => {
        this.getallusers();
      });
  }
  onSelect(value) {
    console.log(value);
    console.log(this.dataSource);
    //this.dataSource=this.dataSource.filter(x=>);
  }
}
