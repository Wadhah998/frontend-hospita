import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user/user.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../form/user-form/user-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  typeUser: any;
  isSuperDoctor !: boolean;
  formGroup !: FormGroup;
  displayPerson = false;
  typeDisplayedPerson !: string;
  listUsers: User[]= [];
  displayedColumns: string[] = ['modifier','password','loginNumber','email','telephone','prenom','nom','TypeUser','id'];
  dataSource! : MatTableDataSource<any>;
  constructor(private userService:UserService,public dialog:MatDialog, private _snackBar: MatSnackBar, private router : Router) {}


  ngOnInit(): void {
    this.chargeUsers();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  chargeUsers(){
    this.listUsers=this.userService.getUser();
    this.dataSource= new MatTableDataSource(this.listUsers);
  }

  deleteUsers(index:number){
    this.userService.removeUsers(index);
    
    this.chargeUsers();

    this._snackBar.open('تم حذف المستخدم بنجاح', '', {
      duration:1500,
      horizontalPosition : 'center',
      verticalPosition: 'bottom'
    })

  }

  ajouteruser(){
    this.router.navigate(['/ajouteruser']);
  }


  editUsers(index:number){

  }
  openUserDialog(): void {
    this.dialog.open(UserFormComponent,{
    width:'60%',
    disableClose:true,
    autoFocus :true})
}


}
