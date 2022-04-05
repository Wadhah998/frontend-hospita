import { Component, OnInit } from '@angular/core';
export interface patient {
  name: string;
  id: number;
  age: number;
  state: string;
  email: string;
  phone: number;
}

const ELEMENT_DATA: patient[] = [
  {
    id: 2,
    name: 'Imed Akrouti',
    age: 4,
    state: 'He ',
    email: 'imed.akrouti@gmail.com',
    phone: 2741780,
  },
  {
    id: 2,
    name: 'Imed Akrouti',
    age: 4,
    state: 'He ',
    email: 'imed.akrouti@gmail.com',
    phone: 2741780,
  },
  {
    id: 2,
    name: 'Imed Akrouti',
    age: 4,
    state: 'He ',
    email: 'imed.akrouti@gmail.com',
    phone: 2741780,
  },
  {
    id: 2,
    name: 'Imed Akrouti',
    age: 4,
    state: 'He ',
    email: 'imed.akrouti@gmail.com',
    phone: 2741780,
  },
  {
    id: 2,
    name: 'Imed Akrouti',
    age: 4,
    state: 'He ',
    email: 'imed.akrouti@gmail.com',
    phone: 2741780,
  },
];
@Component({
  selector: 'app-list-chealdren',
  templateUrl: './list-chealdren.component.html',
  styleUrls: ['./list-chealdren.component.scss'],
})
export class ListChealdrenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'state',
    'email',
    'phone',
    'action',
  ];
  dataSource = ELEMENT_DATA;
}
