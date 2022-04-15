import { Component, OnInit } from '@angular/core';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile-apointement',
  templateUrl: './profile-apointement.component.html',
  styleUrls: ['./profile-apointement.component.scss']
})
export class ProfileApointementComponent implements OnInit {

  img: string = './assets/images/users/user-1.jpg';

  medecins : Medecins []= [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }


  getAllMedecins () {
    this.api.getMedecin()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.medecins = res
  
        },
        error:(error)=>{
          alert("خطأ أثناء جلب السجلات")
        }
      })
  }


}
