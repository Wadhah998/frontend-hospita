import { Menu } from './../../models/menu/menu';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public test! : User
  menu!:Menu[];
  menuMedecin=[
    {
        "link":"التشخيص",
        "redirect":"/doctor-consultation"

    },
    {
        "link":"الرسائل",
        "redirect":"/doctor-chat"

    },

    {
        "link":" جدول المواعيد",
        "redirect":"/doctor-calendar"
    },
    {
        "link":"لوحة متابعة",
        "redirect":"/doctor-appointment"
    },


  ]
  menuAdmin=[
    {
        "link":"الرسائل",
        "redirect":""

    },

    
    {
        "link":"لوحة متابعة",
        "redirect":"/admin"
    },
    
]
menuSuperDoctor=[
  {
      "link":"الرسائل",
      "redirect":"/messagerieSuper"

  },

  {
      "link":"الأطفال",
      "redirect":"/superDoctor-appointment"
  },
  {
      "link":"لوحة متابعة",
      "redirect":"/superDoctorDashboard"
  },
  
]

menuParent=[
  {
      "link":"الرسائل",
      "redirect":"/menu"

  },


  {
      "link":"لوحة متابعة",
      "redirect":"/parent-dashboard"
  }
]
menuMaitre=[
  {
      "link":"الرسائل",
      "redirect":"maitreD"

  },


  {
      "link":"لوحة متابعة",
      "redirect":"/maitreDashboard"
  }
]
school=[
  {
      "link":"الرسائل",
      "redirect":""

  },


  {
      "link":"لوحة متابعة",
      "redirect":"/ecoleDashboard"
  }
]

  constructor() { }

  ngOnInit(): void {
    this.test=JSON.parse(localStorage.getItem("currentUser")!);
    console.log("from navbar",this.test.typeUser);
    console.log(this.test);
  
    switch (this.test.typeUser) {
      case "doctor":
        this.menu=this.menuMedecin
        break;
        case "admin":
        this.menu=this.menuAdmin
        break;
    case  "superdoctor":
      this.menu=this.menuSuperDoctor;
      break;
      case "parent":
      this.menu=this.menuParent;
      break;
      case  "teacher":
      this.menu=this.menuMaitre;
      break;
      case  "school":
      this.menu=this.school;
      break;

      // default:
      //   this.menu=this.menuMedecin;
      //   break;
    }


  }

}
