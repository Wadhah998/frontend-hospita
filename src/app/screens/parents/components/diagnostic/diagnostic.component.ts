import { SecureStorageService } from './../../../../services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class DiagnosticComponent implements OnInit {

   never:number;
   neverless:number;
   always:number;
  diagnosticForm ! : FormGroup;
 

 
  constructor(private router : Router,private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,public patientService:AbstractRestService<any>,public secureStorageService:SecureStorageService) { }

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
  thankYoupage(){
    this.never=0;
    this.neverless=0;
    this.always=0;
    if(this.diagnosticForm.valid){
      if (this.diagnosticForm.get('question1').value==1){
        this.never=this.never+1}
      else if (this.diagnosticForm.get('question1').value==2)   {
          this.neverless=this.neverless+1}
      else{
            this.always=this.always+1
          }

    if (this.diagnosticForm.get('question2').value==1){
      this.never=this.never+1}
    else if (this.diagnosticForm.get('question2').value==2)   {
        this.neverless=this.neverless+1}
    else{
          this.always=this.always+1
        }
        if (this.diagnosticForm.get('question3').value==1){
          this.never=this.never+1}
        else if (this.diagnosticForm.get('question3').value==2)   {
            this.neverless=this.neverless+1}
        else{
              this.always=this.always+1
            }
            if (this.diagnosticForm.get('question4').value==1){
              this.never=this.never+1}
     else if (this.diagnosticForm.get('question4').value==2)   {
         this.neverless=this.neverless+1}
     else{
           this.always=this.always+1
         }
         if (this.diagnosticForm.get('question5').value==1){
           this.never=this.never+1}
         else if (this.diagnosticForm.get('question5').value==2)   {
             this.neverless=this.neverless+1}
         else{
               this.always=this.always+1
     }
     if (this.diagnosticForm.get('question6').value==1){
       this.never=this.never+1}
     else if (this.diagnosticForm.get('question6').value==2)   {
         this.neverless=this.neverless+1}
     else{
           this.always=this.always+1
    }
    if (this.diagnosticForm.get('question7').value==1){
      this.never=this.never+1}
    else if (this.diagnosticForm.get('question7').value==2)   {
        this.neverless=this.neverless+1}
    else{
          this.always=this.always+1
        }
        if (this.diagnosticForm.get('question8').value==1){
          this.never=this.never+1}
        else if (this.diagnosticForm.get('question8').value==2)   {
            this.neverless=this.neverless+1}
        else{
              this.always=this.always+1
            }
            if (this.diagnosticForm.get('question9').value==1){
              this.never=this.never+1}
            else if (this.diagnosticForm.get('question9').value==2)   {
                this.neverless=this.neverless+1}
            else{
                  this.always=this.always+1
                }
                if (this.diagnosticForm.get('question10').value==1){
                  this.never=this.never+1}
                else if (this.diagnosticForm.get('question10').value==2)   {
                    this.neverless=this.neverless+1}
                else{
                      this.always=this.always+1
                    }
        if ((this.never>this.always) && (this.never>this.neverless)){
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
          const submissiveAttitudeTowardsAuy="never";
          const goesLeftRight = "never";
          const easilyTurnOnImpulsive = "never";
          const excessiveAttentionFromTeach="never";
          const lessAcceptedByGroup = "never";
          const beLedByOthers = "never";
          const refuseDefeat = "never";
          const troubleGuidingOthers = "never";
          const troubleIntegratingWithOthernts="never";
          const lessCooperateWithOthers = "never";
          const upsetEasilyMakeEffort = "never";
          const lessAskTeacherHelp = "never";
  
  patient.behaviortroubleparent = {
    insolentWithGrownUps, feelsAttackedDefensive, destructive, denyMistakesBlameOthers, quarrelsomeGetInvolvedFight,
    bullyIntimidateComrades, constantlyFight, unhappy
};
patient.anxitytroubleparent = {
    afraidNewThings, beingCrashedManipulated, shy, worryMuch
};
patient.extratroubleparent = {
    chewMibThings, troubleMakeKeepFriends, suckChewThings, dreamer, lieMadeUpStories, getTroublesMoreThanOthers,
    speakLikeBabyStutters, poutSulkEasily, stealThings, disobeyReluctantlyObey, easilyWrinkledEasilyAngry,
    troubleFinishRepetitiveActivity, cruel, immature, breakRules, notGetAlongWithBrothers, feedingProblems,
    sleepingProblems, feelWrongedCryOutInjustice, bragsBoastful, bowelMovementProblems
};
patient.hyperactivitytroubleparent = {
    excitableImpulsive, cryOftenEasily, squirms, restlessNeedsDoSomething, destructive, troubleFinishingThings,
    easilyBeingDistracted, moody, enabilityFinishWhenDoEffort, disturbOtherChildren
};
patient.somatisationtroubleparent = {headaches, upsetStomach, physicalAches, vomitingNausea};
patient.impulsivitytroubleparent = {
    excitableImpulsive,
    wantDominate,
    squirms,
    restlessNeedsDoSomething
};
patient.learningtroubleparent = {
    hasLearningDifficulties,
    troubleFinishingThings,
    enabilityFinishWhenDoEffort,
    easilyBeingDistracted
};
this.patientService.create(`http://localhost:8000/api/patients`, patient, {headers: {Authorization: `Bearer ${access}`}})
localStorage.removeItem("patient");
        }
        
else if ((this.neverless>this.always)&&(this.neverless>this.never) ) {
 
  
    let access = localStorage.getItem('access');
    if (access) {
        access = this.secureStorageService.getToken(access);
    }
    const patientData = localStorage.getItem('patient');
    const patient: any = JSON.parse(patientData);
    const dreamer = "usual";
    const poutSulkEasily = "sometimes";
    const moody = "sometimes";
    const troubleFinishingThings = "sometimes";
    const immature = "sometimes";
    const denyMistakesBlameOthers = "sometimes";
    const hasLearningDifficulties = "sometimes";
    const chewMibThings = "sometimes";
    const insolentWithGrownUps = "sometimes";
    const troubleMakeKeepFriends = "sometimes";
    const excitableImpulsive = "sometimes";
    const wantDominate = "sometimes";
    const suckChewThings = "sometimes";
    const cryOftenEasily = "sometimes";
    const feelsAttackedDefensive = "sometimes";
    const squirms = "sometimes";
    const afraidNewThings = "sometimes";
    const restlessNeedsDoSomething = "sometimes";
    const destructive = "sometimes";
    const lieMadeUpStories = "sometimes";
    const shy = "sometimes";
    const getTroublesMoreThanOthers= "sometimes";
    const speakLikeBabyStutters = "sometimes";
    const quarrelsomeGetInvolvedFight ="always";
    const stealThings = "always";
    const disobeyReluctantlyObey = "always";
    const worryMuch = "always";
    const easilyWrinkledEasilyAngry = "always";
    const bullyIntimidateComrades = "always";
    const troubleFinishRepetitiveActivity= "always";
    const cruel = "always";
    const easilyBeingDistracted = "sometimes";
    const headaches = "sometimes";
    const breakRules = "sometimes";
    const constantlyFight = "usual";
    const notGetAlongWithBrothers = "usual";
    const enabilityFinishWhenDoEffort="usual";
    const disturbOtherChildren = "usual";
    const unhappy = "usual";
    const feedingProblems = "usual";
    const upsetStomach = "usual";
    const sleepingProblems = "usual";
    const physicalAches = "usual";
    const vomitingNausea = "usual";
    const feelWrongedCryOutInjustice ="usual"; 
    const bragsBoastful = "usual";
    const beingCrashedManipulated = "usual";
    const bowelMovementProblems = "usual";
    const restlessSquirmsChair = "usual";
    const inappropriateNoises = "usual";
    const arrogantImpolite = "never";
    const immediatelySatisfiedNeeds = "never";
    const angryUnexpectedBehavior = "never";
    const sensitiveCriticism = "never";
    const distracted = "never";
    const annoyStudents = "never";
    const brawler = "never";
    const submissiveAttitudeTowardsAuy="never";
    const goesLeftRight = "never";
    const easilyTurnOnImpulsive = "never";
    const excessiveAttentionFromTeach="never";
    const lessAcceptedByGroup = "never";
    const beLedByOthers = "never";
    const refuseDefeat = "never";
    const troubleGuidingOthers = "never";
    const troubleIntegratingWithOthernts="never";
    const lessCooperateWithOthers = "never";
    const upsetEasilyMakeEffort = "never";
    const lessAskTeacherHelp = "never";

patient.behaviortroubleparent = {
insolentWithGrownUps, feelsAttackedDefensive, destructive, denyMistakesBlameOthers, quarrelsomeGetInvolvedFight,
bullyIntimidateComrades, constantlyFight, unhappy
};
patient.anxitytroubleparent = {
afraidNewThings, beingCrashedManipulated, shy, worryMuch
};
patient.extratroubleparent = {
chewMibThings, troubleMakeKeepFriends, suckChewThings, dreamer, lieMadeUpStories, getTroublesMoreThanOthers,
speakLikeBabyStutters, poutSulkEasily, stealThings, disobeyReluctantlyObey, easilyWrinkledEasilyAngry,
troubleFinishRepetitiveActivity, cruel, immature, breakRules, notGetAlongWithBrothers, feedingProblems,
sleepingProblems, feelWrongedCryOutInjustice, bragsBoastful, bowelMovementProblems
};
patient.hyperactivitytroubleparent = {
excitableImpulsive, cryOftenEasily, squirms, restlessNeedsDoSomething, destructive, troubleFinishingThings,
easilyBeingDistracted, moody, enabilityFinishWhenDoEffort, disturbOtherChildren
};
patient.somatisationtroubleparent = {headaches, upsetStomach, physicalAches, vomitingNausea};
patient.impulsivitytroubleparent = {
excitableImpulsive,
wantDominate,
squirms,
restlessNeedsDoSomething
};
patient.learningtroubleparent = {
hasLearningDifficulties,
troubleFinishingThings,
enabilityFinishWhenDoEffort,
easilyBeingDistracted
};
this.patientService.create(`http://localhost:8000/api/patients`, patient, {headers: {Authorization: `Bearer ${access}`}})
localStorage.removeItem("patient");   
  

}  else {
  let access = localStorage.getItem('access');
  if (access) {
      access = this.secureStorageService.getToken(access);
  }
  const patientData = localStorage.getItem('patient');
  const patient: any = JSON.parse(patientData);
  const dreamer = "always";
  const poutSulkEasily = "always";
  const moody = "always";
  const troubleFinishingThings = "always";
  const immature = "always";
  const denyMistakesBlameOthers = "always";
  const hasLearningDifficulties = "always";
  const chewMibThings = "always";
  const insolentWithGrownUps = "always";
  const troubleMakeKeepFriends = "always";
  const excitableImpulsive = "always";
  const wantDominate = "always";
  const suckChewThings = "always";
  const cryOftenEasily = "always";
  const feelsAttackedDefensive = "always";
  const squirms = "always";
  const afraidNewThings = "always";
  const restlessNeedsDoSomething = "always";
  const destructive = "always";
  const lieMadeUpStories = "always";
  const shy = "always";
  const getTroublesMoreThanOthers= "always";
  const speakLikeBabyStutters = "always";
  const quarrelsomeGetInvolvedFight ="always";
  const stealThings = "always";
  const disobeyReluctantlyObey = "always";
  const worryMuch = "always";
  const easilyWrinkledEasilyAngry = "always";
  const bullyIntimidateComrades = "always";
  const troubleFinishRepetitiveActivity= "always";
  const cruel = "always";
  const easilyBeingDistracted = "always";
  const headaches = "always";
  const breakRules = "always";
  const constantlyFight = "always";
  const notGetAlongWithBrothers = "always";
  const enabilityFinishWhenDoEffort="always";
  const disturbOtherChildren = "always";
  const unhappy = "always";
  const feedingProblems = "always";
  const upsetStomach = "always";
  const sleepingProblems = "always";
  const physicalAches = "always";
  const vomitingNausea = "always";
  const feelWrongedCryOutInjustice ="always"; 
  const bragsBoastful = "always";
  const beingCrashedManipulated = "always";
  const bowelMovementProblems = "always";
  const restlessSquirmsChair = "always";
  const inappropriateNoises = "always";
  const arrogantImpolite = "always";
  const immediatelySatisfiedNeeds = "always";
  const angryUnexpectedBehavior = "always";
  const sensitiveCriticism = "always";
  const distracted = "always";
  const annoyStudents = "always";
  const brawler = "always";
  const submissiveAttitudeTowardsAuy="always";
  const goesLeftRight = "always";
  const easilyTurnOnImpulsive = "always";
  const excessiveAttentionFromTeach="always";
  const lessAcceptedByGroup = "always";
  const beLedByOthers = "always";
  const refuseDefeat = "always";
  const troubleGuidingOthers = "always";
  const troubleIntegratingWithOthernts="always";
  const lessCooperateWithOthers = "always";
  const upsetEasilyMakeEffort = "always";
  const lessAskTeacherHelp = "always";
  
patient.behaviortroubleparent = {
insolentWithGrownUps, feelsAttackedDefensive, destructive, denyMistakesBlameOthers, quarrelsomeGetInvolvedFight,
bullyIntimidateComrades, constantlyFight, unhappy
};
patient.anxitytroubleparent = {
afraidNewThings, beingCrashedManipulated, shy, worryMuch
} ;  
patient.extratroubleparent = {
chewMibThings, troubleMakeKeepFriends, suckChewThings, dreamer, lieMadeUpStories, getTroublesMoreThanOthers,
speakLikeBabyStutters, poutSulkEasily, stealThings, disobeyReluctantlyObey, easilyWrinkledEasilyAngry,
troubleFinishRepetitiveActivity, cruel, immature, breakRules, notGetAlongWithBrothers, feedingProblems,
sleepingProblems, feelWrongedCryOutInjustice, bragsBoastful, bowelMovementProblems
};
patient.hyperactivitytroubleparent = {
excitableImpulsive, cryOftenEasily, squirms, restlessNeedsDoSomething, destructive, troubleFinishingThings,
easilyBeingDistracted, moody, enabilityFinishWhenDoEffort, disturbOtherChildren
};
patient.somatisationtroubleparent = {headaches, upsetStomach, physicalAches, vomitingNausea};
patient.impulsivitytroubleparent = {
excitableImpulsive,
wantDominate,
squirms,
restlessNeedsDoSomething
};
patient.learningtroubleparent = {
hasLearningDifficulties,
troubleFinishingThings,
enabilityFinishWhenDoEffort,
easilyBeingDistracted
};
this.patientService.create(`http://localhost:8000/api/patients`, patient, {headers: {Authorization: `Bearer ${access}`}})
localStorage.removeItem("patient");

}

   
                    
        

      
       
    } 
    else{
      this._snackBar.open('الرجاء إكمال تعميرالاستمارة ','',
{ 
  duration: 10000,
  verticalPosition:'bottom',
  horizontalPosition : 'left',
  panelClass: ['blue-snackbar'],
});
    } this.router.navigate(['/commingSoon'])
  }
}
