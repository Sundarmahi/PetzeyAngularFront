import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard_service/dashboard.service';
import { Appointment } from '../../models/appointments';
import { CommonModule } from '@angular/common';
import { AppointmentSummaryComponent } from '../appointment-summary/appointment-summary.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-appointments',
  standalone: true,
  imports: [CommonModule,AppointmentSummaryComponent,RouterOutlet,RouterLink,],

  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent {

  constructor(private service:DashboardService){}

  allAppointment:Appointment[]= []


  ngOnInit(){
   
    this.getAllApointment()
  }

  vetID:number=1234;

  getAllApointment(){
    this.service.getAllAppointments(this.vetID).subscribe((data:Appointment[])=>{
      this.allAppointment=data
      console.log(data)
    });
  }

  feedback = {
    doctorCompetenceRating: 0,
    treatmentOutcomeRating: 0,
    referthisdoctorRating: 0,
    additionalComments: '',
    appointmentProcessRating: 0
  };
 
 
  onSubmit() {
    const appointmentId = 604;
    this.service.submitFeedback(appointmentId, this.feedback).subscribe(
      (response: any) => {
        console.log('Feedback submitted successfully:', response);
        this.resetForm();
      },
      (error: any) => {
        console.error('Error submitting feedback:', error);
     
      }
    );
  }
 
  resetForm() {
    this.feedback = {
      doctorCompetenceRating: 0,
      treatmentOutcomeRating: 0,
      referthisdoctorRating: 0,
      additionalComments: '',
      appointmentProcessRating: 0
    };
  }

  currentPage: number = 1;
  cardsPerPage: number = 8;

  getPaginatedCards(): any[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.allAppointment.slice(startIndex, endIndex);
  }
  nextPage(): void {
    const totalPages = Math.ceil(this.allAppointment.length / this.cardsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    const totalPages = Math.ceil(this.allAppointment.length / this.cardsPerPage);
    return this.currentPage === totalPages;
  }

  goToFirstPage(): void {
    this.currentPage = 1;
  }

  goToLastPage(): void {
    const totalPages = Math.ceil(this.allAppointment.length / this.cardsPerPage);
    this.currentPage = totalPages;
  }
}
