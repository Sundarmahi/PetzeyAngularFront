import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { ViewRecommendedClinicsComponent } from '../view-recommended-clinics/view-recommended-clinics.component';
import { AppointmentService } from '../../../services/appointment-service';
import { Prescription } from '../../../../shared/models/prescription';
import { Appointment } from '../../../models/appointment';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule, FormsModule, ViewRecommendedClinicsComponent],
  templateUrl: './prescriptions.component.html',
  styleUrl: './prescriptions.component.css'
})
export class PrescriptionsComponent {

  prescriptions: Prescription[] = [
  ];

  constructor(private appointmentService: AppointmentService) {
  }
  appointmentdetails: Appointment = new Appointment
  ngOnInit() {
    this.appointmentService.getAppointmentDetails(1).subscribe(data => {
      this.appointmentdetails = data
      this.prescriptions=this.appointmentdetails.appointmentReport.prescriptions
      console.log(this.appointmentdetails.appointmentReport.prescriptions);
    })
  }

}
