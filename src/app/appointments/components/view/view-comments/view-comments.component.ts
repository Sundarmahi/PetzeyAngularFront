import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointment';

@Component({
  selector: 'app-view-comments',
  standalone: true,
  imports: [],
  templateUrl: './view-comments.component.html',
  styleUrl: './view-comments.component.css'
})
export class ViewCommentsComponent {

  comment:string=''
  constructor(private appointmentService: AppointmentService) {

  }

  appointmentdetails: Appointment = new Appointment

  ngOnInit() {
    this.appointmentService.getAppointmentDetails(1).subscribe(data => {
      this.appointmentdetails = data
      this.comment=this.appointmentdetails.appointmentReport.comments
      
    })
  }
}
