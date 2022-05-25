import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecureStorageService } from 'src/app/services/api/secure-storage.service';
import { AbstractRestService } from 'src/app/services/genericservice.service';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.scss']
})
export class AjoutEnfantComponent implements OnInit {
  formGroup !: FormGroup;
  validated = true;
  typeUser !: string | null;
  error !: boolean;
  patient:any

  constructor(private router: Router,private patientService: AbstractRestService<any>,public secureStorageService:SecureStorageService) {
    
  }
   

  ngOnInit(): void {
    this.typeUser = localStorage.getItem('typeUser');
    this.formGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        familyName: new FormControl('', [Validators.required]),
        birthdate: new FormControl('', [Validators.required]),
    });
    if (localStorage.getItem('typeUser') !== 'parent')
    {
       this.formGroup.addControl('parentCin', new FormControl('', [Validators.required]));
    }
  }
 changementDePage(): void {
      localStorage.setItem('this.patient', JSON.stringify(this.formGroup.value));
      let access = localStorage.getItem('access');
                if (access) {
                    access = this.secureStorageService.getToken(access);
                }
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
        this.patient=this.formGroup.value
        this.patient.behaviortroubleparent = {
          insolentWithGrownUps, feelsAttackedDefensive, destructive, denyMistakesBlameOthers, quarrelsomeGetInvolvedFight,
          bullyIntimidateComrades, constantlyFight, unhappy
      };
      this.patient.anxitytroubleparent = {
          afraidNewThings, beingCrashedManipulated, shy, worryMuch
      };
      this.patient.extratroubleparent = {
          chewMibThings, troubleMakeKeepFriends, suckChewThings, dreamer, lieMadeUpStories, getTroublesMoreThanOthers,
          speakLikeBabyStutters, poutSulkEasily, stealThings, disobeyReluctantlyObey, easilyWrinkledEasilyAngry,
          troubleFinishRepetitiveActivity, cruel, immature, breakRules, notGetAlongWithBrothers, feedingProblems,
          sleepingProblems, feelWrongedCryOutInjustice, bragsBoastful, bowelMovementProblems
      };
      this.patient.hyperactivitytroubleparent = {
          excitableImpulsive, cryOftenEasily, squirms, restlessNeedsDoSomething, destructive, troubleFinishingThings,
          easilyBeingDistracted, moody, enabilityFinishWhenDoEffort, disturbOtherChildren
      };
      this.patient.somatisationtroubleparent = {headaches, upsetStomach, physicalAches, vomitingNausea};
      this.patient.impulsivitytroubleparent = {
          excitableImpulsive,
          wantDominate,
          squirms,
          restlessNeedsDoSomething
      };
      this.patient.learningtroubleparent = {
          hasLearningDifficulties,
          troubleFinishingThings,
          enabilityFinishWhenDoEffort,
          easilyBeingDistracted
      };
      this.patientService.create(`http://localhost:8000/api/patients`, this.patient, {headers: {Authorization: `Bearer ${access}`}})
   };
}
