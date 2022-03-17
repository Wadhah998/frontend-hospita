import { MenuService } from './../../services/menu.service';
import { Menu } from './../../models/menu/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menu : Menu[]=[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.chargeMenu();
  }

  chargeMenu(){
    this.menuService.getMenu().subscribe(data=>
      {
        this.menu=data;
      })
  }

}
