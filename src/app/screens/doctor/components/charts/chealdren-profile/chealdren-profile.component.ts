import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient.model';
import { FormGroup } from '@angular/forms';
import { RdvFormComponent } from '../../doctor-calendar/rdv-form/rdv-form.component';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-chealdren-profile',
  templateUrl: './chealdren-profile.component.html',
  styleUrls: ['./chealdren-profile.component.scss'],
})
export class ChealdrenProfileComponent implements OnInit {
  calendarEvents!: Event[];
  calendarOptions!: CalendarOptions;

  formm !: FormGroup;
  @Input() patient!: any;
  img: string = './assets/images/users/imageskkf.jfif';
  constructor(    private dialog: MatDialog,public router:Router) {}

  ngOnInit(): void {}
  handleDateClick() {
  this.router.navigate(['/doctor-calendar'])
  }
}

