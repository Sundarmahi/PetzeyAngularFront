import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';
import { Test } from '../../../../shared/models/test';

@Component({
  selector: 'app-view-tests',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-tests.component.html',
  styleUrl: './view-tests.component.css'
})
export class ViewTestsComponent {

  constructor(private appointmentService: AppointmentService) {

  }
  test: Test[] = []
  appointmentdetails: Appointment = new Appointment()

  ngOnInit() {

    this.appointmentService.getAppointmentDetails(1).subscribe(data => {
      this.appointmentdetails = data
      this.test = this.appointmentdetails.appointmentReport.tests
    })
  }


}
