import { Injectable } from '@angular/core';
import { Clinic } from '../models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private readonly CLINIC_STORAGE_KEY = 'clinics';

  constructor() { }

  
  addClinic(clinic: Clinic): void {
    const clinics = this.getClinicsFromStorage();
    console.log(clinics.length)
    if (clinics.length <= 0)  
      clinic.id = 1
    else
      clinic.id = clinics[clinics.length-1].id + 1;
    clinics.push(clinic);
    localStorage.setItem(this.CLINIC_STORAGE_KEY, JSON.stringify(clinics));
  }

  updateClinic(clinic: Clinic): void {
    const clinics = this.getClinicsFromStorage();
    const index = clinics.findIndex(c => c.id === clinic.id);
    if (index >= 0) {
      clinics[index] = clinic;
      localStorage.setItem(this.CLINIC_STORAGE_KEY, JSON.stringify(clinics));
    }
  }

  removeClinic(clinicId: number): void {
    const clinics = this.getClinicsFromStorage();
    const index = clinics.findIndex(c => c.id === clinicId);
    if (index >= 0) {
      clinics.splice(index, 1);
      localStorage.setItem(this.CLINIC_STORAGE_KEY, JSON.stringify(clinics));
    }
  }

  getClinic(clinicId: number): Clinic | undefined {
    const clinics = this.getClinicsFromStorage();
    return clinics.find(c => c.id === clinicId);
  }

  getAllClinics(): Clinic[] {
    return this.getClinicsFromStorage();
  }

  private getClinicsFromStorage(): Clinic[] {
    const clinicsJson = localStorage.getItem(this.CLINIC_STORAGE_KEY);
    return clinicsJson ? JSON.parse(clinicsJson) : [];
  }

}
