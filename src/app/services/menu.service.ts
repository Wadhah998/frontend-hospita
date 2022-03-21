import { Menu } from './../models/menu/menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu1 } from './../models/menu/menu1';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }


  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }
  getMenu1(): Observable<Menu1[]>{
    return this.http.get<Menu1[]>('./assets/data/menu1.json');
  }
}
