import { Router } from '@angular/router';
import { MedecinService } from './../../services/medecin/medecin.service';
import { Medecin } from './../../models/medecin/medecin';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-super-doctor',
  templateUrl: './super-doctor.component.html',
  styleUrls: ['./super-doctor.component.scss']
})
export class SuperDoctorComponent implements OnInit {

  listUsers: Medecin[]= [];
  

  displayedColumns: string[] = ['modifier','telephone','email','etat ','number','nom','id'];

  dataSource! : MatTableDataSource<any>;


  constructor(private userService:MedecinService, private _snackBar: MatSnackBar, private router : Router) { }

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

  ajouterMedecin(){
    this.router.navigate(['/ajouterMedecin']);
  }


  editUsers(index:number){

  }


}
