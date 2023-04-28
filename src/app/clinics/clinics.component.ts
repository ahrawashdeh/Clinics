import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../services/clinic.service';
import { Clinic } from '../models/clinic';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {


  clinics: Clinic[] = []

  constructor(private clinicService: ClinicService) { }

  ngOnInit(): void {
    this.getAllClinics()
  }

  getAllClinics() {
    this.clinics = this.clinicService.getAllClinics();
  }
}
