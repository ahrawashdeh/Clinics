import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { ClinicManagementComponent } from './clinic-management/clinic-management.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'clinics', pathMatch: 'full' },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinic/:id', component: ClinicDetailsComponent },
  { path: 'clinic-management',component: ClinicManagementComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
