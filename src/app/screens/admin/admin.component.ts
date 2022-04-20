import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user/user.module';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../form/user-form/user-form.component';
import * as _ from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogService } from 'src/app/services/shared/dialog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public select: EventEmitter<User> = new EventEmitter();
  users : User[] = [];
  
  isSuperDoctor !: boolean;
  formGroup !: FormGroup;
  displayPerson = false;
  typeDisplayedPerson !: string;
  listUsers: User[]= [];
  displayedColumns: string[] = ['modifier','password','loginNumber','email','telephone','nom','TypeUser','id'];
  dataSource! : MatTableDataSource<any>;
  User!: User;
 
  constructor(public dialog:MatDialog,private dialogService : DialogService, public api:ApiService, private _snackBar: MatSnackBar, private router : Router) {}
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
  getallusers(){
    this.api.getuser()
    .subscribe({
      next:(res)=>{
        this.listUsers=res
        console.log(this.listUsers);
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
      }
    })
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
  deleteuser(id:number){

    this.dialogService.openConfirmDialog('هل أنت متأكد أنك تريد حذف هذا الطبيب؟')
    .afterClosed().subscribe(res =>{
      if(res){
        this.api.deleteuser(id)
    .subscribe({
      next:(res)=>{
        alert("حذف الدكتور بنجاح")
        this.getallusers();
      },
      error:()=>{
        alert("خطأ اثناء حذف هذا الطبيب !!")
      }
    })
      }
    })
    
  }
  edituser(row : any) {
    this.dialog.open(UserFormComponent,{
      width : '50%',
      data:row,
      disableClose:true,
      autoFocus :true
    }).afterClosed().subscribe(val=>{
      if(val==='تحديث'){
        this.getallusers();
      }
    });
  }  
  
  chercheUser($event: any){
    let filteredData = _.filter(this.listUsers,(item) =>{
      return item.typeUser.toLowerCase() == $event.value.toLowerCase();
      
      
    })
    this.dataSource = new MatTableDataSource(filteredData);

  }
  onSelect(item: User) {
    // this.selectedtIndex = index;
    this.User = item;
    console.log('from list', this.User);
    this.select.emit(item);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }
}
   
        
  




  
