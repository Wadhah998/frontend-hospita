import { DynamicTableCrud } from './../../../admin/dynamic-table.crud.service';
import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Enfants } from 'src/app/models/enfant/Enfant';
import { Medecins } from 'src/app/models/medecin/Profiles';
import { ApiService } from 'src/app/services/api/api.service';
import { RendezVousFormComponent } from '../../form/rendez-vous-form/rendez-vous-form.component';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
@Component({
  selector: 'app-profile-apointement',
  templateUrl: './profile-apointement.component.html',
  styleUrls: ['./profile-apointement.component.scss']
})
export class ProfileApointementComponent extends DynamicTableCrud<any> implements OnInit {


  @Output()
  public select: EventEmitter<Medecins> = new EventEmitter();

  img: string = './assets/images/users/user-1.jpg';

  indexe!: string;

  enfants : Enfants []= [];

  constructor(private api : ApiService, private dialog : MatDialog, private router : Router,  service: AbstractRestService<any>,secureStorageService: SecureStorageService) { 
    super(service, 'http://localhost:8000/api/patients', secureStorageService)
  }
  headers = ['', 'الاسم', 'اللقب', 'تاريخ الميلاد'];
  access !: string | null;
  patient !: any;
  userId !: number;
  numberPatients !: number;
  typeUser !: string | null;
  doctors !: any[];

 async ngOnInit(): Promise<void> {
    this.access = localStorage.getItem('access');
    const typeUser = localStorage.getItem('typeUser');
    if (typeUser !== null){
        this.typeUser = typeUser;
    }
    if (this.access) {
        this.options = {
            params: null,
            headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
        };
        await this.getData();
        console.log(this.data);
    }
  }
  override async getData(): Promise<void> {
    this.data = await this.service.list(this.actionUrl, this.options);
    this.numberPatients = this.data.length;
}


  // getAllEnfants () {
  //   this.api.getEnfant()
  //     .subscribe({
  //       next:(res)=>{
  //         console.log(res);
  //         this.enfants = res
  
  //       },
  //       error:(error)=>{
  //         alert("خطأ أثناء جلب السجلات")
  //       }
  //     })
  // }

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
