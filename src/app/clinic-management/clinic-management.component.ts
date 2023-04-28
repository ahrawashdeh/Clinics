import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../services/clinic.service';
import { Clinic } from '../models/clinic';

@Component({
  selector: 'app-clinic-management',
  templateUrl: './clinic-management.component.html',
  styleUrls: ['./clinic-management.component.css']
})
export class ClinicManagementComponent implements OnInit {
  
  clinic: Clinic = {
    id : 0,
    name: ''
  }

  clinics: Clinic[] = []

  constructor(private clinicService: ClinicService) { }

  ngOnInit(): void {
    this.getAllClinics()
  }

  addClinic() {
    this.clinicService.addClinic(this.clinic);
    this.getAllClinics()
  }

  getAllClinics() {
    this.clinics = this.clinicService.getAllClinics();
    console.log(this.clinics)
  }

}
