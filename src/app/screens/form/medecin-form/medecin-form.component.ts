import { ApiService } from './../../../services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.scss'],
})
export class MedecinFormComponent implements OnInit {

  medecinForm! : FormGroup;
  actionBtn : string = "تأكيد";
  fileUploaded = true;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<MedecinFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.medecinForm = this.formBuilder.group({
      typeUser: ['طبيب', Validators.required], 
     telephone: ['', Validators.required], 
     email : ['', [Validators.required, Validators.email]],
     loginNumber: ['', Validators.required],
     speciality: ['', Validators.required],
     nom: ['', Validators.required],
     prenom: ['', Validators.required],
     password:['', Validators.required],
     id: ['', Validators.required],
     gouvernat : ['', Validators.required],
     CodePostal :  ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = 'تحديث';
      this.medecinForm.controls['telephone'].setValue(this.editData.telephone);
      this.medecinForm.controls['email'].setValue(this.editData.email);
      this.medecinForm.controls['cin'].setValue(this.editData.loginNumber);
      this.medecinForm.controls['speciality'].setValue(
        this.editData.speciality
      );
      this.medecinForm.controls['nom'].setValue(this.editData.nom);
      this.medecinForm.controls['prenom'].setValue(this.editData.prenom);
      this.medecinForm.controls['password'].setValue(this.editData.password);
      this.medecinForm.controls['id'].setValue(this.editData.id);
    }
  }

  addMedecin() {
    if (!this.editData) {
      if (this.medecinForm.valid) {
        this.api.postMedecin(this.medecinForm.value).subscribe({
          next: (res) => {
            this._snackBar.open('إضافة الطبيب بنجاح','',
            { 
              duration: 3000
          });
            this.medecinForm.reset();
            this.dialogRef.close('تأكيد');
          },
          error: () => {
            this._snackBar.open('خطأ بينما يضاف','',
    { 
      duration: 3000
  });
          },
        });
      }
    } else {
      this.modifierMedecin();
    }
  }

  modifierMedecin() {
    this.api.putMedecin(this.medecinForm.value, this.editData.id).subscribe({
      next: (res) => {
        this._snackBar.open('تم تحديث الطبيب خليفة','',
    { 
      duration: 3000,
      verticalPosition:'bottom',
      horizontalPosition : 'left',
      panelClass: ['blue-snackbar']
  });
        this.medecinForm.reset();
        this.dialogRef.close('تحديث');
      },
      error: () => {
        this._snackBar.open('خطأ أثناء تحديث السجل','',
    { 
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
  });
      },
    });
  }
}
