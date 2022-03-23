import { AdminComponent } from './screens/admin/admin.component';
import { LandingComponent } from './components/landing/landing.component';
import { MedecinFormComponent } from './screens/form/medecin-form/medecin-form.component';
import { AjouterMedecinComponent } from './components/ajouter-medecin/ajouter-medecin.component';
import { SuperDoctorComponent } from './components/super-doctor/super-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './screens/forget-password/forget-password.component';



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
  MatSnackBarModule
]
const routes: Routes = [
  {path: '',component:LandingComponent},
  {path: 'superdocwelcpage', component : SuperDoctorComponent},
  {path: 'ajouterMedecin', component : MedecinFormComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgetpassword' , component: ForgetPasswordComponent },
  { path:'admin', component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MaterialComponents],
  exports: [RouterModule,
    MaterialComponents]
})
export class AppRoutingModule { }
