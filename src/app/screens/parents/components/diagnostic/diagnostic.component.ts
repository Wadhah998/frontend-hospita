import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class DiagnosticComponent implements OnInit {


  diagnosticForm ! : FormGroup;

  listeQuestions = [
    {
      id:0,
      question : "الضلالات : يوجد معتقدات كاذبة لا تمتُّ للواقع بصلة."
    },
    {
      id:1,
      question : "الهلاوس : رؤيةَ  أشياء غير حقيقية."
    },
    {
      id:2,
      question : "سماع اصوات غير حقيقية"
    },
    {
      id:3,
      question : "الشعور  باشياء  تلامس  جسدك  وهي  غير  موجودة"
    },
    {
      id:4,
      question : "صعوبة  التفكير في  موضوع  واحد او صعوبة التحكم في التفكير  في موضوع  واحد"
    },
    {
      id:5,
      question : "سلوك حركي غير سوي صعب التحكم فيه  أو غير منظَّم للغاية"
    },
    {
      id:6,
      question : "الاهمال وصعوبات التنظيم : اهمال العمل"
    },
    {
      id:7,
      question : "اهمال النظافة الشخصية"
    },
    {
      id:8,
      question : "الانسحاب الاجتماعي"
    },
    {
      id:9,
      question : "عدم القدرة على الاستمتاع بالنشاطات اليومية"
    },
  ];

  constructor(private router : Router,private formBuilder: FormBuilder) { }

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
    });
  }

  goBack(){
this.router.navigate(['parent-dashboard'])
  }

}
