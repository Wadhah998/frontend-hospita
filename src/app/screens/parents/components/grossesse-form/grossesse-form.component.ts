import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grossesse-form',
  templateUrl: './grossesse-form.component.html',
  styleUrls: ['./grossesse-form.component.scss']
})
export class GrossesseFormComponent implements OnInit {

  

  grossesseForm ! : FormGroup;

  constructor(private router : Router,private formBuilder: FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.grossesseForm = this.formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      question6: ['', Validators.required],
      question7: ['', Validators.required],
      question8: ['', Validators.required],
      question9: ['', Validators.required],
      question10: ['', Validators.required],
      question11: ['', Validators.required],
      question12: ['', Validators.required],
      question13: ['', Validators.required],
      question14: ['', Validators.required],
      question15: ['', Validators.required],
    });
  }

  goBack(){
this.router.navigate(['parent-dashboard'])
  }
  thankYoupage(){
    if(this.grossesseForm.valid){
      this.router.navigate(['thankYou']);
    }
    else{
      this._snackBar.open('الرجاء إكمال تعميرالاستمارة ','',
{ 
  duration: 1000,
  verticalPosition:'bottom',
  horizontalPosition : 'left',
  panelClass: ['blue-snackbar'],
});
    }
  }

}
