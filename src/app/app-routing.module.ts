import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { ClinicManagementComponent } from './clinic-management/clinic-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'clinics', pathMatch: 'full' },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinic/:id', component: ClinicDetailsComponent },
  { path: 'clinic-management',component: ClinicManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
