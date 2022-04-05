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
import { MessagerieComponent } from './screens/SuperDoctor/messagerie/messagerie.component';
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
  { path: 'admin', component: AdminComponent },
  { path: 'messagerieSuper', component: MessagerieComponent },

  { path: 'medecins', component: SuperDoctorComponent },
  { path: 'ajouterMedecin', component: MedecinFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: '',
    component: DoctorComponent,
    children: [
      { path: 'doctor-appointment', component: DoctorAppointmentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialComponents],
  exports: [RouterModule, MaterialComponents],
})
export class AppRoutingModule {}
