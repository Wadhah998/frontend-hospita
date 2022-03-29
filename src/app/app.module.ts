import { DialogService } from './services/shared/dialog.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiService,
    DialogService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents : [MatConfirmDialogComponent]
})

export class AppModule { }
