import { ApiService } from './../../../services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.scss'],
})
export class MedecinFormComponent implements OnInit {
  medecinForm!: FormGroup;
  actionBtn: string = 'تأكيد';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<MedecinFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.medecinForm = this.formBuilder.group({
      typeUser: ['طبيب', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loginNumber: ['', Validators.required],
      speciality: ['', Validators.required],
      nom: ['', Validators.required],
      password: ['', Validators.required],
      id: ['', Validators.required],
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
      this.medecinForm.controls['password'].setValue(this.editData.password);
      this.medecinForm.controls['id'].setValue(this.editData.id);
    }
  }

  addMedecin() {
    if (!this.editData) {
      if (this.medecinForm.valid) {
        this.api.postMedecin(this.medecinForm.value).subscribe({
          next: (res) => {
            alert('إضافة الطبيب بنجاح');
            this.medecinForm.reset();
            this.dialogRef.close('تأكيد');
          },
          error: () => {
            alert('خطأ بينما يضاف');
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
        alert('تم تحديث الطبيب خليفة');
        this.medecinForm.reset();
        this.dialogRef.close('تحديث');
      },
      error: () => {
        alert('خطأ أثناء تحديث السجل');
      },
    });
  }
}
