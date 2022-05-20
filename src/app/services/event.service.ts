import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}
  postEvent(data: any) {
    return this.http.post<Event[]>('http://localhost:3000/listEvents/', data);
  }
  getEvent() {
    return this.http.get<Event[]>('http://localhost:3000/listEvents/');
  }
}
