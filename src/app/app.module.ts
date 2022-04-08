import { DialogService } from './services/shared/dialog.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SuperDoctorComponent } from './components/super-doctor/super-doctor.component';
import { MedecinFormComponent } from './screens/form/medecin-form/medecin-form.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './screens/forget-password/forget-password.component';
import { AdminComponent } from './screens/admin/admin.component';
import { UserFormComponent } from './screens/form/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './screens/form/profile/profile.component';
import { ApiService } from './services/api/api.service';
import { MatConfirmDialogComponent } from './screens/mat-confirm-dialog/mat-confirm-dialog.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/header/user/user.component';

import { NotificationsComponent } from './components/header/notifications/notifications.component';
import { DoctorComponent } from './screens/doctor/components/doctor/doctor.component';
import { DoctorAppointmentComponent } from './screens/doctor/components/doctor-appointment/doctor-appointment.component';
import { FullCasesComponent } from './screens/doctor/components/charts/full-cases/full-cases.component';
import { MeatingsComponent } from './screens/doctor/components/charts/meatings/meatings.component';
import { CancelledCasesComponent } from './screens/doctor/components/charts/cancelled-cases/cancelled-cases.component';
import { ChildrenComponent } from './screens/doctor/components/charts/children/children.component';
import { ChealdrenProfileComponent } from './screens/doctor/components/charts/chealdren-profile/chealdren-profile.component';
import { DoctorConsultationComponent } from './screens/doctor/components/doctor-consultation/doctor-consultation.component';
import { PatientProfileComponent } from './screens/doctor/components/doctor-consultation/patient-profile/patient-profile.component';
import { ConsultationComponent } from './screens/doctor/components/doctor-consultation/consultation/consultation.component';
import { ParentHeaderComponent } from './screens/parents/components/parent-header/parent-header.component';
import { ParentComponent } from './screens/parents/components/parent/parent.component';
import { ParentDashboardComponent } from './screens/parents/components/parent-dashboard/parent-dashboard.component';
import { ListChealdrenComponent } from './screens/parents/components/list-chealdren/list-chealdren.component';
import { SuperMedecinComponent } from './screens/SuperDoctor/components/super-medecin/super-medecin.component';
import { SuperDoctorApointementComponent } from './screens/SuperDoctor/components/super-doctor-apointement/super-doctor-apointement.component';
import { HeaderSuperDoctorComponent } from './screens/SuperDoctor/components/header-super-doctor/header-super-doctor.component';
import { DashboardSuperDoctorComponent } from './screens/SuperDoctor/components/dashboard-super-doctor/dashboard-super-doctor.component';
import { ListMedecinsComponent } from './screens/SuperDoctor/components/list-medecins/list-medecins.component';
import { ProfileDoctorComponent } from './screens/SuperDoctor/components/profile-doctor/profile-doctor.component';
import { MessagerieComponent } from './screens/SuperDoctor/components/messagerie/messagerie.component';
import { AllChartsComponent } from './screens/SuperDoctor/components/all-charts/all-charts.component';


import { ListPatientsComponent } from './screens/doctor/components/doctor-consultation/list-patients/list-patients.component';
import { TensionComponent } from './screens/doctor/components/charts/tension/tension.component';
import { SugarComponent } from './screens/doctor/components/charts/sugar/sugar.component';
import { HartComponent } from './screens/doctor/components/charts/hart/hart.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SuperDoctorComponent,
    MedecinFormComponent,
    LandingComponent,
    NavBar1Component,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    AdminComponent,
    UserFormComponent,
    DashboardComponent,
    ProfileComponent,
    MatConfirmDialogComponent,
    HeaderComponent,
    UserComponent,
    NotificationsComponent,
    DoctorComponent,
    DoctorAppointmentComponent,
    FullCasesComponent,
    MeatingsComponent,
    CancelledCasesComponent,
    ChildrenComponent,
    ChealdrenProfileComponent,
    DoctorConsultationComponent,
    PatientProfileComponent,
    ConsultationComponent,
    ParentHeaderComponent,
    ParentComponent,
    ParentDashboardComponent,
    ListChealdrenComponent,
    MessagerieComponent,
    SuperMedecinComponent,
    SuperDoctorApointementComponent,
    HeaderSuperDoctorComponent,
    DashboardSuperDoctorComponent,
    ListMedecinsComponent,
    ProfileDoctorComponent,
    AllChartsComponent,
    ListPatientsComponent,
    TensionComponent,
    SugarComponent,
    HartComponent,
    LandingNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    AngularMaterialModule,
  ],
  providers: [ApiService, DialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MatConfirmDialogComponent],
})
export class AppModule {}
