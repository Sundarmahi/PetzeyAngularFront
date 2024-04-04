import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecommendedDoctor } from '../../../models/recommendedDoctor';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment-service';

@Component({
  selector: 'app-view-recommended-doctors',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-recommended-doctors.component.html',
  styleUrl: './view-recommended-doctors.component.css'
})
export class ViewRecommendedDoctorsComponent {

  constructor(private appointmentService: AppointmentService) {

  }
  recommendedDoctors: RecommendedDoctor[] = []
  appointmentdetails: Appointment = new Appointment

  ngOnInit() {
    this.appointmentService.getAppointmentDetails(1).subscribe(data => {
      this.appointmentdetails = data
       this.recommendedDoctors = this.appointmentdetails.appointmentReport.recommendedDoctors
      console.log(this.appointmentdetails.appointmentReport.recommendedDoctors);
    })
  }



}
