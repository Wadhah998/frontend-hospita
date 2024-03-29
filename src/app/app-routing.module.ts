import { MaitreService } from './guards/maitre.service';
import { AjouterMaitreComponent } from './screens/ecole/forms/ajouter-maitre/ajouter-maitre.component';
import { EcoleDashboardComponent } from './screens/ecole/components/ecole-dashboard/ecole-dashboard.component';
import { Localisation } from './screens/sign-up/localisation/localisation.module';
import { PatientService } from './guards/patient.service';
import { AdminComponent } from './screens/admin/admin.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './screens/form/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MedecinFormComponent } from './screens/form/medecin-form/medecin-form.component';
import { SuperDoctorComponent } from './components/super-doctor/super-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './screens/forget-password/forget-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DoctorComponent } from './screens/doctor/components/doctor/doctor.component';
import { DoctorAppointmentComponent } from './screens/doctor/components/doctor-appointment/doctor-appointment.component';
import { DoctorConsultationComponent } from './screens/doctor/components/doctor-consultation/doctor-consultation.component';
import { ParentComponent } from './screens/parents/components/parent/parent.component';
import { ParentDashboardComponent } from './screens/parents/components/parent-dashboard/parent-dashboard.component';
import { SuperMedecinComponent } from './screens/SuperDoctor/components/super-medecin/super-medecin.component';
import { SuperDoctorApointementComponent } from './screens/SuperDoctor/components/super-doctor-apointement/super-doctor-apointement.component';
import { DashboardSuperDoctorComponent } from './screens/SuperDoctor/components/dashboard-super-doctor/dashboard-super-doctor.component';
import { ListMedecinsComponent } from './screens/SuperDoctor/components/list-medecins/list-medecins.component';
import { AllChartsComponent } from './screens/SuperDoctor/components/all-charts/all-charts.component';
import { HeaderSuperDoctorComponent } from './screens/SuperDoctor/components/header-super-doctor/header-super-doctor.component';
import { DoctorMessagerieComponent } from './screens/doctor/components/doctor-messagerie/doctor-messagerie.component';
import { AuthGuard } from './guards/auth.guard';
import { DoctorGuard } from './guards/doctor.guard';
import { AdminGuard } from './guards/admin.guard';
import { EcoleService } from './guards/ecole.service';
import { DoctorCalendarComponent } from './screens/doctor/components/doctor-calendar/doctor-calendar.component';



import { MaitredashboardComponent } from './screens/maitre/components/maitredashboard/maitredashboard.component';
import { ListEnfantsComponent } from './screens/maitre/components/list-enfants/list-enfants.component';
import { sample } from 'lodash';
import { SuperdocService } from './guards/superdoc.service';
import { ProfileApointementComponent } from './screens/superDoctor/components/profile-apointement/profile-apointement.component';
import { ProfileMedecinComponent } from './screens/superDoctor/components/profile-medecin/profile-medecin.component';
import { DiagnosticComponent } from './screens/parents/components/diagnostic/diagnostic.component';
import { AjoutEnfantComponent } from './screens/parents/form/ajout-enfant/ajout-enfant.component';
import { ThankYouComponent } from './screens/parents/components/thank-you/thank-you.component';
import { MessagerieComponent } from './screens/SuperDoctor/components/messagerie/messagerie.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { GrossesseFormComponent } from './screens/parents/components/grossesse-form/grossesse-form.component';
import { ProfileUComponent } from './components/header/profile-u/profile-u.component';
import { ParentCalendarComponent } from './screens/parents/components/parent-calendar/parent-calendar.component';
import { ParentMessagerieComponent } from './screens/parents/components/parent-messagerie/parent-messagerie.component';
import { DiagnosticMaitreComponent } from './screens/maitre/components/di/diagnostic-maitre/diagnostic-maitre.component';
import { AdminMessagerieComponent } from './screens/admin/admin-messagerie/admin-messagerie.component';
import { EcoleMessagerieComponent } from './screens/ecole/components/ecole-messagerie/ecole-messagerie.component';
import { MaitreMessagerieComponent } from './screens/maitre/components/maitre-messagerie/maitre-messagerie.component';



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatDividerModule,
  MatSidenavModule,
  MatSliderModule,
  MatTableModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatSnackBarModule,
  MatInputModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule,
];
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'superdocwelcpage', component: SuperDoctorComponent },
  { path: 'ajouterMedecin', component: MedecinFormComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard, AdminGuard] },
  { path: 'Superdoctor-chat', component: MessagerieComponent },

  { path: 'medecins', component: SuperDoctorComponent },
  { path: 'profileU', component: ProfileUComponent },

  { path: 'ajouterMedecin', component: MedecinFormComponent },
  { path: 'ajouterMaitre', component: AjouterMaitreComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'superDoctorDashboard', component: DashboardSuperDoctorComponent , canActivate: [AuthGuard, SuperdocService] },
  { path: 'ecoleDashboard', component: EcoleDashboardComponent,canActivate: [AuthGuard,EcoleService ] },
  { path: 'listMedecins', component: ListMedecinsComponent },
  { path: 'allCharts', component : AllChartsComponent},
  { path: 'headerSuper', component : HeaderSuperDoctorComponent},
  { path: 'profileApoint', component : ProfileApointementComponent},
  { path: 'profileApoint/singleDoctor/:id', component : ProfileMedecinComponent },
  { path: 'diagnostic', component : DiagnosticComponent },
  { path: 'maitreDashboard', component: MaitredashboardComponent,canActivate: [AuthGuard,MaitreService ] },
  { path:  'listeEnfants', component : ListEnfantsComponent },
  { path: 'thankYou', component : ThankYouComponent },
  { path: 'commingSoon', component : CommingSoonComponent },
  { path: 'grossesseForm', component : GrossesseFormComponent },
  { path: 'parent-chat', component: ParentMessagerieComponent },
  { path: 'diagnosticMaitre', component : DiagnosticMaitreComponent },
  { path: 'admin-chat', component: AdminMessagerieComponent },
  { path: 'ecole-chat', component:EcoleMessagerieComponent },
  { path: 'maitre-chat', component:MaitreMessagerieComponent },

  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: 'doctor-appointment',
        component: DoctorAppointmentComponent,
      },
      {
        path: 'doctor-consultation',
        component: DoctorConsultationComponent,
      },
      {
        path: 'doctor-chat',
        component: DoctorMessagerieComponent,
      },
      {
        path: 'doctor-calendar',
        component: DoctorCalendarComponent,
        // canActivate: [AuthGuard, DoctorGuard],
      },
    ],
  },
  {
    path: '',
    component: ParentComponent,
    children: [
      /*  { path: 'doctor-appointment', component: DoctorAppointmentComponent }, */
      {
        path: 'parent-dashboard',
        component: ParentDashboardComponent,canActivate: [AuthGuard, PatientService]
      },
      { path: 'superDoctor-appointment', component : SuperDoctorApointementComponent,canActivate:[AuthGuard,SuperdocService] },

      { path: 'ajout-enfant', component: AjoutEnfantComponent  },
      { path: 'parent-calendar', component: ParentCalendarComponent ,canActivate: [AuthGuard, PatientService] }
    ],
  },]
  
@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialComponents],
  exports: [RouterModule, MaterialComponents],
})
export class AppRoutingModule {}
