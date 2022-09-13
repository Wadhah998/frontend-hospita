import { Router } from '@angular/router';
import { AbstractRestService } from 'src/app/services/genericservice.service';

import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import { DialogService } from 'src/app/services/shared/dialog.service';
import { ApiService } from 'src/app/services/api/api.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

import { AjouterEnfantComponent } from '../../forms/ajouter-enfant/ajouter-enfant.component';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { ProfilEnfantsComponent } from '../profil-enfants/profil-enfants.component';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { Patient } from 'src/app/models/patient/patient.model';


@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrls: ['./list-enfants.component.scss']
})
export class ListEnfantsComponent extends DynamicTableCrud<any> implements OnInit {

  enfants : Enfants []= [];

  enfant !: Enfants;

  selectedSpeciality!: boolean;
  access !: string | null;
  numberPatients !: number;
  typeUser !: string | null;
   
  

  enfantForm! : FormGroup;
  displayedColumns: string[] = ['action','telephone', 'email','situation','date','nomEnfant','id' ];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output()
  public select: EventEmitter<Enfants> = new EventEmitter()

  constructor(private api: ApiService, public dialog: MatDialog, public router:Router  ,service:AbstractRestService<any>,secureStorageService:SecureStorageService) 
  {super(service, 'http://localhost:8000/api/patients', secureStorageService) }
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
action(element : any){
  if (element.supervise!=null){
    return('تحت الإشراف')
  }else{
    return('غير خاضعة للرقابة')
  }
}
ajoutenfant(){
  this.router.navigate(['ajout-enfant'])
}

 

 
}

