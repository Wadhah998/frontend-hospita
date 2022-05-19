import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from 'src/app/models/event.model';
import {
  CalendarOptions,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';
@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.scss'],
})
export class RdvFormComponent implements OnInit {
  eventForm!: FormGroup;
  actionBtn: string = 'تأكيد';
  calendarEvents: Event[] = [];
  time: any;
  //timepicker: any;
  options: Object = { autoHide: false, direction: 'rtl' };
  constructor(
    private formBuilder: FormBuilder,
    private EventService: EventService,
    private dialogRef: MatDialogRef<RdvFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    //console.log(this.editData);
    //console.log(this.start);
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      //end: this.editData.dateStr + ' 09:40:00',
      // password: ['', Validators.required],
      //id: String(this.editData.id++),
      // gouvernat: ['', Validators.required],
      // CodePostal: ['', Validators.required],
    });

    // if (this.editData) {
    //   this.actionBtn = 'تحديث';
    //   this.medecinForm.controls['telephone'].setValue(this.editData.telephone);
    //   this.medecinForm.controls['email'].setValue(this.editData.email);
    //   this.medecinForm.controls['cin'].setValue(this.editData.loginNumber);
    //   this.medecinForm.controls['speciality'].setValue(
    //     this.editData.speciality
    //   );
    //   this.medecinForm.controls['nom'].setValue(this.editData.nom);
    //   this.medecinForm.controls['password'].setValue(this.editData.password);
    //   this.medecinForm.controls['id'].setValue(this.editData.id);
    // }
  }

  addEvent() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
      let start =
        this.editData.dateStr + ' ' + this.eventForm.get('start').value + ':00';
      console.log(start);
      let end =
        this.editData.dateStr + ' ' + this.eventForm.get('end').value + ':00';
      let title = this.eventForm.get('title').value;
      console.log(end, end);
      let data = { title, start, end };
      console.log(data);
      this.EventService.postEvent(data).subscribe({
        next: (res) => {
          alert('إضافة الطبيب بنجاح');
          this.eventForm.reset();
          this.EventService.getEvent().subscribe({
            next: (res) => {
              this.calendarEvents = res;
              console.log('from modal', this.calendarEvents);
              this.dialogRef.close(this.calendarEvents);
            },
          });
        },
        error: () => {
          alert('خطأ بينما يضاف');
        },
      });
    }
  }

  // modifierMedecin() {
  //   this.api.putMedecin(this.medecinForm.value, this.editData.id).subscribe({
  //     next: (res) => {
  //       alert('تم تحديث الطبيب خليفة');
  //       this.medecinForm.reset();
  //       this.dialogRef.close('تحديث');
  //     },
  //     error: () => {
  //       alert('خطأ أثناء تحديث السجل');
  //     },
  //   });
  // }
}
