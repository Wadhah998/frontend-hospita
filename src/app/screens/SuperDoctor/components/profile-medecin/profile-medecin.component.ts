import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { MedecinFormComponent } from 'src/app/screens/form/medecin-form/medecin-form.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile-medecin',
  templateUrl: './profile-medecin.component.html',
  styleUrls: ['./profile-medecin.component.scss']
})
export class ProfileMedecinComponent implements OnInit {


  telephone! : number;
    email!: string
    cin!: number
    speciality!: string;
    password!: string;
    nom!: string;
    id!: number
    gouvernat! : string;
    
    
    medecin: any

  constructor(private api : ApiService, private route : ActivatedRoute, private router : Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.api.getSingleMedecin(+id)
    .pipe(map(res=>res))
   /* .subscribe({
      next:(res)=>{
        this.medecin = res;*/
     .subscribe(( res=> 
       { this.medecin=res}
       ))
    
       
    
     }
    //  error:(error)=>{
       // alert("خطأ أثناء جلب السجلات")


       onBack(){
         this.router.navigate(['/superDoctor-appointment']);
       }

       rendezvous (){
        const dialogRef = this.dialog.open(MedecinFormComponent,{
          width : '32%',
          autoFocus :true,
    
        });
        setTimeout(() => {
          dialogRef.close();
        }, 15000);
      }

       

}