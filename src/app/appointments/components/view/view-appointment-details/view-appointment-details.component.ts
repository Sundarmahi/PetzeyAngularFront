import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment-service';
import { Appointment } from '../../../models/appointments';

@Component({
  selector: 'app-view-appointment-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-appointment-details.component.html',
  styleUrl: './view-appointment-details.component.css'
})
export class ViewAppointmentDetailsComponent {

  constructor(private appointmentService:AppointmentService){}
  appointment = {
    ID : 76352,
    "AppointmentDate" : "25th Oct 2024",
    "AppointmentTime" : "10:23 AM",
    "PetIssues" : ["Hand Injury, IBS"],
    "ReasonsToVisit" : "High Fever",
    "DoctorName" : "John Doe"
  }  
 
   onCall() {
     console.log('Call button clicked');
   }
 
   onChat() {
     console.log('Chat button clicked');
   }
 
   onClose() {
     console.log('Close button clicked');
   }
 
   onCancel() {
     console.log('Cancel button clicked');
   }

   onSubmit(){
    console.log("called")
   }
   cancelSubmit(){
    this.appointmentService.cancel_appointment(501).subscribe(
      response =>console.log('Cancelled Successfully',response),
      error => console.error('Error',error)
    );
   }
   closeSubmit(){
    this.appointmentService.close_appointment(502).subscribe(
      response =>console.log('Closed Successfully',response),
      error => console.error('Error',error)
    );
   }

  appointmentId:number=0

  doctorName:string='john'
  appointment1:Appointment = new Appointment

  ngOnInit() {
    this.appointmentService.getAppointmentDetails(1234).subscribe(data => {
      this.appointment1 = data
      console.log("ada"+this.appointment);
      
    }) 

  }

}
