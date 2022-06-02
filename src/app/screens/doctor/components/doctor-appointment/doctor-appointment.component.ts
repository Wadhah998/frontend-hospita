import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient/patient.model';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';
import { ApiService } from 'src/app/services/api/api.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent extends DynamicTableCrud<any> implements OnInit {

   patients: any[]=[];
   casesNumbers:number=0;
   numberPatients !: number;
   access !: string | null;
  typeUser: string; 
  userId:any;
   constructor(private api : ApiService,  private router : Router,  service: AbstractRestService<any>,secureStorageService: SecureStorageService) { 
    super(service, 'http://localhost:8000/api/patients', secureStorageService)
  }

 async ngOnInit(): Promise<void>{
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
      console.log(this.data);
  }
  this.data.forEach(element => {
   
      if ((element.supervise!=null)&&(element.supervise.doctor==this.userId)){
         this.patients.push(element);
        console.log(element);
       
    }
     
  });
  console.log(this.patients);
}
override async getData(): Promise<void> {
  this.data = await this.service.list(this.actionUrl, this.options);
  this.numberPatients = this.data.length;

}
}