import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';

@Component({
  selector: 'app-diagnostic-maitre',
  templateUrl: './diagnostic-maitre.component.html',
  styleUrls: ['./diagnostic-maitre.component.scss']
})
export class DiagnosticMaitreComponent implements OnInit {

  diagnosticForm ! : FormGroup;
  step : any = 1;
  constructor(private router : Router,private formBuilder: FormBuilder,public secureStorageService:SecureStorageService,public patientService:AbstractRestService<any>,
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

  

    next(){
      this.step = this.step+1;
    }

    previous() {
      this.step = this.step - 1 ;
    }
    envoi(){
      console.log('catched')
      let access = localStorage.getItem('access');
          if (access) {
              access = this.secureStorageService.getToken(access);
          }
          const patientData = localStorage.getItem('patient');
           const patient: any = JSON.parse(patientData);
          const dreamer = "never";
          const poutSulkEasily = "never";
          const moody = "never";
          const troubleFinishingThings = "never";
          const immature = "never";
          const denyMistakesBlameOthers = "never";
          const hasLearningDifficulties = "never";
          const chewMibThings = "never";
          const insolentWithGrownUps = "never";
          const troubleMakeKeepFriends = "never";
          const excitableImpulsive = "never";
          const wantDominate = "never";
          const suckChewThings = "never";
          const cryOftenEasily = "never";
          const feelsAttackedDefensive = "never";
          const squirms = "never";
          const afraidNewThings = "never";
          const restlessNeedsDoSomething = "never";
          const destructive = "never";
          const lieMadeUpStories = "never";
          const shy = "never";
          const getTroublesMoreThanOthers= "never";
          const speakLikeBabyStutters = "never";
          const quarrelsomeGetInvolvedFight ="never";
          const stealThings = "never";
          const disobeyReluctantlyObey = "never";
          const worryMuch = "never";
          const easilyWrinkledEasilyAngry = "never";
          const bullyIntimidateComrades = "never";
          const troubleFinishRepetitiveActivity= "never";
          const cruel = "never";
          const easilyBeingDistracted = "never";
          const headaches = "never";
          const breakRules = "never";
          const constantlyFight = "never";
          const notGetAlongWithBrothers = "never";
          const enabilityFinishWhenDoEffort="never";
          const disturbOtherChildren = "never";
          const unhappy = "never";
          const feedingProblems = "never";
          const upsetStomach = "never";
          const sleepingProblems = "never";
          const physicalAches = "never";
          const vomitingNausea = "never";
          const feelWrongedCryOutInjustice ="never"; 
          const bragsBoastful = "never";
          const beingCrashedManipulated = "never";
          const bowelMovementProblems = "never";
          const restlessSquirmsChair = "never";
          const inappropriateNoises = "never";
          const arrogantImpolite = "never";
          const immediatelySatisfiedNeeds = "never";
          const angryUnexpectedBehavior = "never";
          const sensitiveCriticism = "never";
          const distracted = "never";
          const annoyStudents = "never";
          const brawler = "never";
          const submissiveAttitudeTowardsAuthority="never";
          const goesLeftRight = "never";
          const easilyTurnOnImpulsive = "never";
          const excessiveAttentionFromTeacher="never";
          const lessAcceptedByGroup = "never";
          const beLedByOthers = "never";
          const refuseDefeat = "never";
          const troubleGuidingOthers = "never";
          const troubleIntegratingWithOtherStudents="never";
          const lessCooperateWithOthers = "never";
          const upsetEasilyMakeEffort = "never";
          const lessAskTeacherHelp = "never";
  
          
 patient.behaviorTroubleTeacher =
{
    immediatelySatisfiedNeeds, angryUnexpectedBehavior, sensitiveCriticism, poutSulkEasily, moody,
    brawler, denyMistakesBlameOthers, lessAskTeacherHelp
};
patient.extraTroubleTeacher = {
  submissiveAttitudeTowardsAuthority,
lessAcceptedByGroup,
unacceptDefeat: refuseDefeat,
troubleIntegratingWithOtherStudents,
lessCooperateWithOthers
};
patient.inattentionTroubleTeacher = {
distracted, dreamer, beLedByOthers, troubleFinishingThings,
troubleGuidingOthers, immature, upsetEasilyMakeEffort, hasLearningDifficulties
};
patient.hyperActivityTroubleTeacher = {
restlessSquirmsChair, angryUnexpectedBehavior, distracted, annoyStudents, poutSulkEasily, moody, goesLeftRight,
easilyTurnOnImpulsive, troubleFinishingThings, upsetEasilyMakeEffort
};
patient.impulsivityTroubleTeacher = {
restlessSquirmsChair,
inappropriateNoises,
arrogantImpolite,
annoyStudents,
goesLeftRight,
easilyTurnOnImpulsive,
excessiveAttentionFromTeacher};
this.patientService.create(`http://localhost:8000/api/patients`, patient, {headers: {Authorization: `Bearer ${access}`}})
localStorage.removeItem("patient");
this.router.navigate(['/commingSoon'])
        }
      

      


    }


