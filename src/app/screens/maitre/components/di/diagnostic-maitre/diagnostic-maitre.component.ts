import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic-maitre',
  templateUrl: './diagnostic-maitre.component.html',
  styleUrls: ['./diagnostic-maitre.component.scss']
})
export class DiagnosticMaitreComponent implements OnInit {

  diagnosticForm ! : FormGroup;
  step : any = 1;
  constructor(private router : Router,private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }


    ngOnInit(): void {
      this.diagnosticForm = this.formBuilder.group({
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
        question16: ['', Validators.required],
        question17: ['', Validators.required],
        question18: ['', Validators.required],
        question19: ['', Validators.required],
        question20: ['', Validators.required],
        question21: ['', Validators.required],
        question22: ['', Validators.required],
        question23: ['', Validators.required],
        question24: ['', Validators.required],
        question25: ['', Validators.required],
        question26: ['', Validators.required],
        question27: ['', Validators.required],
        question28: ['', Validators.required],
      });
    }

    submit() {
      
    }

    next(){
      this.step = this.step+1;
    }

    previous() {
      this.step = this.step - 1 ;
    }

}
