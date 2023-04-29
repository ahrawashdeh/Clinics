import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ClinicManagementComponent } from './clinic-management/clinic-management.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    NavComponent,
    ClinicManagementComponent,
    ClinicDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
