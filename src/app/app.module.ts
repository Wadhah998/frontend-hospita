import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AjouterMedecinComponent } from './components/ajouter-medecin/ajouter-medecin.component';
import { SuperDoctorComponent } from './components/super-doctor/super-doctor.component';
import { MedecinFormComponent } from './screens/form/medecin-form/medecin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AjouterMedecinComponent,
    SuperDoctorComponent,
    MedecinFormComponent,
    LandingComponent,
    NavBar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
