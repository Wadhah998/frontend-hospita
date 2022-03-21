import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/menu.service';
import { Menu1 } from './../../models/menu/menu1';

@Component({
  selector: 'app-nav-bar1',
  templateUrl: './nav-bar1.component.html',
  styleUrls: ['./nav-bar1.component.scss']
})
export class NavBar1Component implements OnInit {
  menu : Menu1[]=[];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.chargeMenu();
  }
  chargeMenu(){
    this.menuService.getMenu1().subscribe(data=>
      {
        this.menu=data;
      })
  }

}


