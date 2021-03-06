import { DialogService } from 'src/app/services/shared/dialog.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-ajouter-enfant',
  templateUrl: './ajouter-enfant.component.html',
  styleUrls: ['./ajouter-enfant.component.scss']
})
export class AjouterEnfantComponent implements OnInit {

  enfantForm! : FormGroup;
  actionBtn : string = "تأكيد";
  fileUploaded = true;

  constructor(
    
    private formBuilder : FormBuilder,public router:Router ,private api : ApiService, private dialogRef : MatDialogRef<AjouterEnfantComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData :any) { }

  ngOnInit(): void {
    this.enfantForm = this.formBuilder.group({
     telephone: ['', Validators.required], 
    cin: ['', Validators.required], 
    ecole: ['', Validators.required], 
    date: ['', Validators.required], 
     email : ['', [Validators.required, Validators.email]],
     situation: ['', Validators.required],
     nomParent: ['', Validators.required],
     nomEnfant: ['', Validators.required],
     password:['', Validators.required],
     id: ['', Validators.required],
     gouvernat : ['', Validators.required],
     CodePostal :  ['', Validators.required]
    });

    if(this.editData){
      this.actionBtn = "تحديث";
      this.enfantForm.controls['telephone'].setValue(this.editData.telephone);
      this.enfantForm.controls['email'].setValue(this.editData.email);
      this.enfantForm.controls['cin'].setValue(this.editData.cin);
      this.enfantForm.controls['situation'].setValue(this.editData.situation);
      this.enfantForm.controls['nomEnfant'].setValue(this.editData.nomEnfant);
      this.enfantForm.controls['nomParent'].setValue(this.editData.nomParent);
      this.enfantForm.controls['password'].setValue(this.editData.password);
      this.enfantForm.controls['id'].setValue(this.editData.id);
      this.enfantForm.controls['codePostal'].setValue(this.editData.codePostal);
      this.enfantForm.controls['ecole'].setValue(this.editData.ecole);
      this.enfantForm.controls['date'].setValue(this.editData.date);
      this.enfantForm.controls['gouvernat'].setValue(this.editData.gouvernat)

    }
 
}


addEnfant() {
 this.router.navigate(['commingSoon'])
 
}


onUploadFile(file:File){
  this.api.uploadFile(file);
}

}
