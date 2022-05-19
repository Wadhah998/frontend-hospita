import { Menu } from './../../models/menu/menu';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public test : User
  menu:Menu[];
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
        "link":"الأطباء",
        "redirect":""
    },
    {
        "link":"لوحة متابعة",
        "redirect":"/medecins"
    },
    {
        "link":"افهمني",
        "redirect":""
    }
]
menuSuperDoctor=[
  {
      "link":"الرسائل",
      "redirect":""

  },

  {
      "link":"الأطباء",
      "redirect":""
  },
  {
      "link":"لوحة متابعة",
      "redirect":"/medecins"
  },
  {
      "link":"افهمني",
      "redirect":""
  }
]
menuMaitre=[
  {
      "link":"الرسائل",
      "redirect":""

  },

  {
      "link":"الأطباء",
      "redirect":""
  },
  {
      "link":"لوحة متابعة",
      "redirect":"/medecins"
  },
  {
      "link":"افهمني",
      "redirect":""
  }
]
menuParent=[
  {
      "link":"الرسائل",
      "redirect":""

  },

  {
      "link":"الأطباء",
      "redirect":""
  },
  {
      "link":"لوحة متابعة",
      "redirect":"/medecins"
  },
  {
      "link":"افهمني",
      "redirect":""
  }
]

  constructor() { }

  ngOnInit(): void {
    this.test=JSON.parse(localStorage.getItem("currentUser"));
    console.log("from navbar",this.test.typeUser);
    // if (this.test.typeUser=="طبيب")
    // {
    //   this.menu=
    //   [
    //     {
    //         "link":"الرسائل",
    //         "redirect":""

    //     },

    //     {
    //         "link":"الأطباء",
    //         "redirect":""
    //     },
    //     {
    //         "link":"لوحة متابعة",
    //         "redirect":"/medecins"
    //     },
    //     {
    //         "link":"افهمني",
    //         "redirect":""
    //     }
    // ]
    //    }
    // else if (this.test.typeUser=="admin"){
    //   console.log("admin")
    //   this.menu=[

    //   ]
    // }
    // else if(this.test.typeUser=="طبيب أول"){
    //   this.menu=[

    //   ]

    // }
    // else {
    //   console.log("SuperDoc")
    //   this.menu=[

    //   ]

    // }
    switch (this.test.typeUser) {
      case "doctor":
        this.menu=this.menuMedecin
        break;
        case "admin":
        this.menu=this.menuMedecin
    break;
    case "طبيب أول":
      this.menu=this.menuSuperDoctor;
      break;
      case "ولي":
      this.menu=this.menuParent;
      break;

      default:
        this.menu=this.menuSuperDoctor;
        break;
    }


  }

}
