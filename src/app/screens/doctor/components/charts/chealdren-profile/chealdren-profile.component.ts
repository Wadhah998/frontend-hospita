import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
import { FormGroup } from '@angular/forms';
import { RdvFormComponent } from '../../doctor-calendar/rdv-form/rdv-form.component';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';
import { DynamicTableCrud } from 'src/app/screens/admin/dynamic-table.crud.service';


@Component({
  selector: 'app-chealdren-profile',
  templateUrl: './chealdren-profile.component.html',
  styleUrls: ['./chealdren-profile.component.scss'],
})
export class ChealdrenProfileComponent extends DynamicTableCrud<any> implements OnInit {
  calendarEvents!: Event[];
  calendarOptions!: CalendarOptions;
  idMedecin:number;
  parentId:number;


  formm !: FormGroup;
  @Input() patient!: any;
  img: string = './assets/images/users/imageskkf.jfif';
  constructor(    private dialog: MatDialog,public router:Router,service:AbstractRestService<any>,secureStorageService:SecureStorageService) {
    super(service, 'http://localhost:8000/api/persons', secureStorageService)
  }

  async ngOnInit(): Promise<void> {
    await this.getData()
    
    
  }
  
  handleDateClick() {
  this.router.navigate(['/doctor-calendar'])
  }
  affecterMedecin(doctorId: number | undefined, $event: Event,patientId:number): void {
    $event.preventDefault();
    
    console.log(patientId,doctorId);
     if (patientId !== null && patientId !== undefined && doctorId !== null && doctorId !== undefined)
    {
        this.service.create('http://localhost:8000/api/patients/supervises',
            {patient_id: patientId, doctor_id: doctorId, accepted: true}, this.options).then(() => {
              console.log(patientId)
                
        })
    }
    else  console.log( this.data.id,doctorId);
}
}

