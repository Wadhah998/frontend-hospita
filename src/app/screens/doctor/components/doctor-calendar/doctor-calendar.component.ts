import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { DialogService } from 'src/app/services/shared/dialog.service';
import { ApiService } from 'src/app/services/api/api.service';
import { EventService } from 'src/app/services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { MedecinFormComponent } from 'src/app/screens/form/medecin-form/medecin-form.component';
import { RdvFormComponent } from 'src/app/screens/doctor/components/doctor-calendar/rdv-form/rdv-form.component';
import { Event } from 'src/app/models/event.model';
@Component({
  selector: 'app-doctor-calendar',
  templateUrl: './doctor-calendar.component.html',
  styleUrls: ['./doctor-calendar.component.scss'],
})
export class DoctorCalendarComponent implements OnInit {
  searchText: string = '';
  calendarEvents!: Event[];
  calendarOptions!: CalendarOptions;
  newEventDate: any;
  constructor(
    private api: ApiService,
    private eventService: EventService,
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.getEvents();
    }, 1200);
    setTimeout(() => {
      this.calendarOptions = {
        headerToolbar: {
          left: 'timeGridDay,dayGridMonth',
          center: 'title',
          right: 'prev,next,today',
        },
        eventColor: '#f12',
        //eventClassNames: 'bg-danger' + 'text-white',
        eventBackgroundColor: '#f12',
        eventTextColor: 'white',

        allDaySlot: false,
        initialView: 'dayGridMonth',
        weekends: true,
        eventDisplay: 'block',
        locale: 'ar',
        buttonText: {
          prev: 'السابق',
          next: 'التالي',
          today: 'اليوم',
          month: 'شهر',
          week: 'أسبوع',
          day: 'يوم',
          list: 'أجندة',
        },
        //initialEvents: this.calendarEvents,
        events: this.calendarEvents,
        weekText: 'أسبوع',
        allDayText: 'اليوم كله',
        moreLinkText: 'أخرى',
        noEventsText: 'أي أحداث لعرض',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        eventsSet: this.getEvents.bind(this),
        dateClick: this.handleDateClick.bind(this), // bind is important!
        eventMinWidth: 60,
        /*   events: [
      {
        title: 'event 1',
        start: '2022-04-26 08:00:00',

        end: '2022-04-26 08:34:34',
        backgroundColor: 'green',
        borderColor: 'green',
      },

      {
        title: 'event 1',
        start: '2022-04-26 08:40:00',
        end: '2022-04-26 09:34:34',
        // backgroundColor: 'green',
        // borderColor: 'green',
      },

    ], */

        initialEvents: this.calendarEvents,
        eventTimeFormat: {
          // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        },
        slotLabelFormat: {
          // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        },
        slotMinTime: '08:00:00',
        slotMaxTime: '16:00:00',
        //slotTimeFormat: 'H:mm',
        slotDuration: '00:15:00',
        slotLabelInterval: 15,
        //slotLabelFormat: 'h:mm a',
      };
    }, 3500);
  }

  /* calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-03-26' },
      { title: 'event 2', date: '2019-04-02' },
    ],
  }; */

  handleDateClick(event: any) {
    console.log(event);
    let id = this.calendarEvents.length;
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
  getEvents() {
    this.eventService.getEvent().subscribe({
      next: (res) => {
        this.calendarEvents = res;
        console.log(this.calendarEvents);
      },
    });
  }
}
