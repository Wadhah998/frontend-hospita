import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { ApiService } from 'src/app/services/api/api.service';
import { RendezVousFormComponent } from '../../form/rendez-vous-form/rendez-vous-form.component';
@Component({
  selector: 'app-profile-apointement',
  templateUrl: './profile-apointement.component.html',
  styleUrls: ['./profile-apointement.component.scss']
})
export class ProfileApointementComponent implements OnInit {

  img: string = './assets/images/users/user-1.jpg';

  indexe!: string;

  enfants : Enfants []= [];

  constructor(private api : ApiService, private dialog : MatDialog, private router : Router) { }

  ngOnInit(): void {
    this.getAllEnfants();
  }


  getAllEnfants () {
    this.api.getEnfant()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.enfants = res
  
        },
        error:(error)=>{
          alert("خطأ أثناء جلب السجلات")
        }
      })
  }

  rendezvous (enfant : any){
    const dialogRef = this.dialog.open(RendezVousFormComponent,{
      width : '40%',
      data : enfant,
      autoFocus :true,
      disableClose:true,
      

    });
  }

  showMedecin(id : number){
      
            this.router.navigate(['/profileApoint','singleDoctor', id]);
    /*console.log('it works');
    const dialogRef = this.dialog.open(ProfileMedecinComponent,{
      width : '32%',
      //data:row,
      autoFocus :true,

    });
    setTimeout(() => {
      dialogRef.close();
    }, 15000);*/
  }


}
