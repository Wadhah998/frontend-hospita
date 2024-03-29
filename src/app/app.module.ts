import { DialogService } from './services/shared/dialog.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { AllChartsComponent } from './screens/SuperDoctor/components/all-charts/all-charts.component';
import { ProfileApointementComponent } from './screens/superDoctor/components/profile-apointement/profile-apointement.component';
import { ProfileMedecinComponent } from './screens/superDoctor/components/profile-medecin/profile-medecin.component';
import { RendezVousFormComponent } from './screens/superDoctor/form/rendez-vous-form/rendez-vous-form.component';
import { ListPatientsComponent } from './screens/doctor/components/doctor-consultation/list-patients/list-patients.component';
import { TensionComponent } from './screens/doctor/components/charts/tension/tension.component';
import { SugarComponent } from './screens/doctor/components/charts/sugar/sugar.component';
import { HartComponent } from './screens/doctor/components/charts/hart/hart.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { UserProfileComponent } from './screens/admin/user-profile/user-profile.component';

import { DoctorMessagerieComponent } from './screens/doctor/components/doctor-messagerie/doctor-messagerie.component';

import { ContactComponent } from './screens/doctor/components/doctor-messagerie/contact/contact.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MaitredashboardComponent } from './screens/maitre/components/maitredashboard/maitredashboard.component';
import { ListEnfantsComponent } from './screens/maitre/components/list-enfants/list-enfants.component';
import { AjouterEnfantComponent } from './screens/maitre/forms/ajouter-enfant/ajouter-enfant.component';
import { ProfilEnfantsComponent } from './screens/maitre/components/profil-enfants/profil-enfants.component';
import { FilterUsersPipe } from './components/pipes/filter-users.pipe';
import { SecureStorageService } from './services/api/secure-storage.service';




import { DiagnosticComponent } from './screens/parents/components/diagnostic/diagnostic.component';
import { EcoleDashboardComponent } from './screens/ecole/components/ecole-dashboard/ecole-dashboard.component';
import { ListeMaitresComponent } from './screens/ecole/components/liste-maitres/liste-maitres.component';
import { ProfileMaitreComponent } from './screens/ecole/components/profile-maitre/profile-maitre.component';
import { AjouterMaitreComponent } from './screens/ecole/forms/ajouter-maitre/ajouter-maitre.component';
import { ThankYouComponent } from './screens/parents/components/thank-you/thank-you.component';
import { DoctorChatComponent } from './screens/doctor/components/doctor-messagerie/doctor-chat/doctor-chat.component';
import { ChatComponent } from './screens/SuperDoctor/components/messagerie/chat/chat.component';
import { SidebarComponent } from './screens/SuperDoctor/components/messagerie/sidebar/sidebar.component';
import { MessagerieComponent } from './screens/SuperDoctor/components/messagerie/messagerie.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';



import { DoctorCalendarComponent } from './screens/doctor/components/doctor-calendar/doctor-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { RdvFormComponent } from './screens/doctor/components/doctor-calendar/rdv-form/rdv-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CarouselModule } from 'ngx-owl-carousel-o';
FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
]);
import { AjoutEnfantComponent } from './screens/parents/form/ajout-enfant/ajout-enfant.component';
import { GrossesseFormComponent } from './screens/parents/components/grossesse-form/grossesse-form.component';

import { ProfileUComponent } from './components/header/profile-u/profile-u.component';
import { RdvdocterComponent } from './screens/doctor/components/charts/rdvdocter/rdvdocter.component';
import { ParentCalendarComponent } from './screens/parents/components/parent-calendar/parent-calendar.component';
import { ParentMessagerieComponent } from './screens/parents/components/parent-messagerie/parent-messagerie.component';
import { ParentChatComponent } from './screens/parents/components/parent-messagerie/parent-chat/parent-chat.component';
import { ParentContactComponent } from './screens/parents/components/parent-messagerie/parent-contact/parent-contact.component';
import { DiagnosticMaitreComponent } from './screens/maitre/components/di/diagnostic-maitre/diagnostic-maitre.component';
import { AdminChatComponent } from './screens/admin/admin-messagerie/admin-chat/admin-chat.component';
import { AdminContactComponent } from './screens/admin/admin-messagerie/admin-contact/admin-contact.component';
import { AdminMessagerieComponent } from './screens/admin/admin-messagerie/admin-messagerie.component';
import { EcoleMessagerieComponent } from './screens/ecole/components/ecole-messagerie/ecole-messagerie.component';
import { EcoleChatComponent } from './screens/ecole/components/ecole-messagerie/ecole-chat/ecole-chat.component';
import { EcoleContactComponent } from './screens/ecole/components/ecole-messagerie/ecole-contact/ecole-contact.component';
import { MaitreMessagerieComponent } from './screens/maitre/components/maitre-messagerie/maitre-messagerie.component';
import { MaitreChatComponent } from './screens/maitre/components/maitre-messagerie/maitre-chat/maitre-chat.component';
import { MaitreContactComponent } from './screens/maitre/components/maitre-messagerie/maitre-contact/maitre-contact.component';

// import {
//   NgxMatDatetimePickerModule,
//    NgxMatNativeDateModule,
//   NgxMatTimepickerModule,
// } from '@angular-material-components/datetime-picker';
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
    UserProfileComponent,
    MaitredashboardComponent,
    ListEnfantsComponent,
    AjouterEnfantComponent,
    ProfilEnfantsComponent,
    

    FilterUsersPipe,
    DoctorMessagerieComponent,
    ChatComponent,
    ContactComponent,
    ProfileApointementComponent,
    ProfileMedecinComponent,
    RendezVousFormComponent,
    FilterUsersPipe,
    SidebarComponent,
    ChatComponent,
    AjoutEnfantComponent,
    DoctorChatComponent,
    MessagerieComponent,
    
    DiagnosticComponent,
    DoctorCalendarComponent,
    RdvFormComponent,
         EcoleDashboardComponent,
         ListeMaitresComponent,
         ProfileMaitreComponent,
         AjouterMaitreComponent,
         ThankYouComponent,
         CommingSoonComponent,
         GrossesseFormComponent,
         ProfileUComponent,
         RdvdocterComponent,
         ParentCalendarComponent,
      
         
        
         ParentMessagerieComponent,
         ParentChatComponent,
         ParentContactComponent,
         DiagnosticMaitreComponent,
         AdminChatComponent,
         AdminContactComponent,
         AdminMessagerieComponent,
         EcoleMessagerieComponent,
         EcoleChatComponent,
         EcoleContactComponent,
         MaitreMessagerieComponent,
         MaitreChatComponent,
         MaitreContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    AngularMaterialModule,
    SimplebarAngularModule,
    CommonModule,
    CarouselModule,
    FullCalendarModule,
    MatDatepickerModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    CarouselModule 
  ],
  providers: [ApiService, DialogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MatConfirmDialogComponent],
})
export class AppModule {}
