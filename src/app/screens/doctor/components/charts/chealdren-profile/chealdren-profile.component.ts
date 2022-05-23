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
  @Input() patient!: Patient;
  img: string = './assets/images/users/user-1.jpg';
  constructor(    private dialog: MatDialog,) {}

  ngOnInit(): void {}
  handleDateClick() {
    console.log(event);
   // let id = this.calendarEvents.length;
    //alert('date click! ' + arg.dateStr);
    this.dialog
      .open(RdvFormComponent, {
        width: '40%',
        disableClose: true,
        autoFocus: true,
        data: event,
      })
      .afterClosed()
      .subscribe((val) => {
        console.log('value is', val);
        if (val) {
          /* const azert = this.getEvents();*/
          console.log('list events', val);
          this.calendarOptions.events = val;
          console.log('list calendar', this.calendarOptions.events);
        }
      });
  }
}

