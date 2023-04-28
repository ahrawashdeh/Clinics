import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic';
import { ClinicService } from '../services/clinic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {

  clinic: Clinic = { id: 0, name: ''}
  constructor(private clinicService: ClinicService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClinic()
  }

  getClinic() {
    let temp = this.clinicService.getClinic(+this.activatedRoute.snapshot.params['id'])
    if (temp) {
      this.clinic = temp
    }
    return;
  }

}
