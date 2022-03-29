import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  medecinForm! : FormGroup;
  actionBtn : string = "تأكيد";
  telephone! : number;
    email!: string
    cin!: number
    speciality!: string;
    password!: string;
    nom!: string;
    id!: number




  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<ProfileComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData :any
  
  ) { }


  ngOnInit(): void {
    this.medecinForm = this.formBuilder.group({
     telephone: ['', Validators.required], 
     email : ['', Validators.required],
     cin: ['', Validators.required],
     speciality: ['', Validators.required],
     nom: ['', Validators.required],
     password:['', Validators.required],
     id: ['', Validators.required]
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


      
      this.medecinForm.controls['email'].setValue(this.editData.email);
      this.medecinForm.controls['cin'].setValue(this.editData.cin);
      this.medecinForm.controls['speciality'].setValue(this.editData.speciality);
      this.nom=this.editData.nom;
      this.medecinForm.controls['password'].setValue(this.editData.password);
    }

    this.dialogRef.updatePosition({ bottom: `30px`,
    right: `0px`});


  }
}