import { AbstractRestService } from 'src/app/services/genericservice.service';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};


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
import { DynamicTableCrud } from './dynamic-table.crud.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent  extends DynamicTableCrud<any> implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public select: EventEmitter<User> = new EventEmitter();
  users : User[] = [];
   
  isSuperDoctor !: boolean;
  formGroup !: FormGroup;
  labels!:any;
  actionBtn: string = 'تأكيد';
  
  displayedColumns: string[] = ['modifier','loginNumber','email','telephone','nom','TypeUser','id'];
  dataSource! : MatTableDataSource<any>;
  User!: User;
   updateSubscription!: Subscription;

   access !: string | null;
  typeUser: string; 
  userId:any;
  nbSchool:number;
  nbparent !:number;
  nbteacher !:number;
  nbSuperdocter !:number;
   async ngOnInit(): Promise<void>  {
    this.access = localStorage.getItem('access');
    const typeUser = localStorage.getItem('typeUser');
     this.userId = localStorage.getItem('userId');
    if (typeUser !== null){
        this.typeUser = typeUser;
    }
    if (this.access) {
        this.options = {
            params: null,
            headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
        };
        await this.getData();
        
        this.User=this.data[1]
        console.log(this.data);
        this.nbSuperdocter = 0;
        this.nbSchool = 0;
        this.nbparent = 0;
        this.nbteacher = 0;
        this.data.forEach(element => {
          // console.log('elemnt',element.typeUser);
  
           if (element.typeUser === "superdoctor"){
              // console.log("if statement", element.typeUser =="superdocter")
              this.nbSuperdocter = this.nbSuperdocter + 1;
           }
           else if (element.typeUser ==="school"){
               this.nbSchool=this.nbSchool + 1;
           }
           else if (element.typeUser==="parent"){
              this.nbparent=this.nbparent + 1;
           }
               else if (element.typeUser==="teacher"){
               this.nbteacher=this.nbteacher + 1;
           }            


       }  )
    }
    console.log("hhh",this.nbSuperdocter)
       console.log(this.nbSchool)
       console.log(this.nbteacher)
       console.log(this.nbparent)
       this.labels={"superDocters": String,
                    "Techars": String,
                    "parent": String,
                    "shools": String,
      }
  
  this.chartOptions = {
    series: [ this.nbteacher, this.nbparent, this.nbSchool,this.nbSuperdocter],
     chart: {
       width: 380,
       type: "donut"
     },
     dataLabels: {
       enabled: false
     },
     fill: {
       type: "gradient"
     },
     legend: {
       // formatter: function(val, opts) {
       //   return val + " - " + opts.w.globals.series[opts.seriesIndex];
       // }
     },
     labels: ['Teachers', 'Parents', 'Schools', 'Superdoctors'],
     
     responsive: [
       {
         breakpoint: 480,
         options: {
           chart: {
             width: 200
           },
           legend: {
             position: "bottom"
           }
         }
       }
     ]
   };
  
 }
  constructor( service:AbstractRestService<any>, public dialog:MatDialog,private dialogService : DialogService,  secureStorageService : SecureStorageService ,public api:ApiService, private _snackBar: MatSnackBar, private router : Router, private httpClient: HttpClient,) {
    super(  service, 'http://localhost:8000/api/persons', secureStorageService)
    
    
    
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   openUserDialog() {
    this.dialog
      .open(UserFormComponent, {
        width: '60%',
        disableClose: true,
        autoFocus: true,
      })
      .afterClosed()
      .subscribe(async (val) => {
        this.router.navigate(['/admin'])
        .then(async () => {
          // this.data.splice(index, 1);
          // this.numberItems--;
          console.log('catched');
          this.getData()
      });
      });
  }
 
  edituser(row : any) {
    this.dialog.open(UserFormComponent,{
      width : '50%',
      data:row,
      disableClose:true,
      autoFocus :true
    }).afterClosed().subscribe(val=>{
      if(val==='تحديث'){
        this.getData();
      }
    });
  }  
  
 
  onSelect(item: User) {
    // this.selectedtIndex = index;
    this.User = item;
    console.log('from list', this.User);
    this.select.emit(item);
    //console.log('from list' + this.gePatients());
    console.log('from list', item);
  }
  override async getData(): Promise<void> {
    this.data = await this.service.list(this.actionUrl, this.options);
    // this.getData()
  }

  chercheTyperUser($event: any) {
    let filteredData = _.filter(this.data, (element) => {
      return element.typeUser.toLowerCase() == $event.value.toLowerCase();
    });
    this.data = new MatTableDataSource(filteredData);
  }
  afficherTouTyperUser() {
    this.getData();
  }
}
   