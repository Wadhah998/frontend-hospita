import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';
import { Medecins } from 'src/app/models/medecin/Profiles';

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.scss']
})
export class ProfileDoctorComponent  {

  @Input()
  public medecin!: any;

  /*

  medecinForm! : FormGroup;
  actionBtn : string = "تأكيد";
  telephone! : number;
    email!: string
    cin!: number
    speciality!: string;
    password!: string;
    nom!: string;
    id!: number
    gouvernat! : string;




  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<ProfileDoctorComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData :any
  
  ) { }


  ngOnInit(): void {
   /* this.medecinForm = this.formBuilder.group({
     telephone: ['', Validators.required], 
     email : ['', Validators.required],
     cin: ['', Validators.required],
     speciality: ['', Validators.required],
     nom: ['', Validators.required],
     password:['', Validators.required],
     id: ['', Validators.required],
     gouvernat: ['', Validators.required]

    });

    if(this.editData){
      this.actionBtn = "تحديث";
      const telephone = this.editData.telephone;


      this.nom=this.editData.nom;
      this.email=this.editData.email;
      this.cin=this.editData.cin;
      this.speciality=this.editData.speciality;
      this.id=this.editData.id;
      this.password=this.editData.password;
      this.nom=this.editData.nom;
      this.gouvernat = this.editData.gouvernat;
      this.telephone = this.editData.telephone;


      
      this.medecinForm.controls['email'].setValue(this.editData.email);
      this.medecinForm.controls['cin'].setValue(this.editData.cin);
      this.medecinForm.controls['speciality'].setValue(this.editData.speciality);
      this.nom=this.editData.nom;
      this.medecinForm.controls['password'].setValue(this.editData.password);
      this.medecinForm.controls['gouvernat'].setValue(this.editData.gouvernat);
    }

    this.dialogRef.updatePosition({ bottom: `30px`,
    right: `0px`});


  }*/

}
