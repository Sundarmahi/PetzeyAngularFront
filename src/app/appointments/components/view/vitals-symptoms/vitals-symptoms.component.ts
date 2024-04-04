import { Component } from '@angular/core';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewRecommendedDoctorsComponent } from '../view-recommended-doctors/view-recommended-doctors.component';
import { ViewRecommendedClinicsComponent } from '../view-recommended-clinics/view-recommended-clinics.component';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';
import { ViewTestsComponent } from '../view-tests/view-tests.component';
import { SymptomsComponent } from '../symptoms/symptoms.component';
import { Symptoms } from '../../../../shared/models/symptoms';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment-service';
import { Vitals } from '../../../../shared/models/vitals';


@Component({
  selector: 'app-vitals-symptoms',
  standalone: true,
  imports: [PrescriptionsComponent, CommonModule, FormsModule, ViewRecommendedDoctorsComponent,
    ViewRecommendedClinicsComponent, ViewCommentsComponent, ViewTestsComponent, SymptomsComponent],
  templateUrl: './vitals-symptoms.component.html',
  styleUrl: './vitals-symptoms.component.css'
})
export class VitalsSymptomsComponent {

  constructor(private appointmentService: AppointmentService) {

  }
  symptoms: Symptoms[] = []
  vital: Vitals = new Vitals
  appointmentdetails: Appointment = new Appointment

  ngOnInit() {

    this.appointmentService.getAppointmentDetails(1).subscribe(data => {

      this.appointmentdetails = data
      this.vital = this.appointmentdetails.appointmentReport.vitals;
      this.symptoms = this.appointmentdetails.appointmentReport.symptoms
  
      

    })
  }



}
