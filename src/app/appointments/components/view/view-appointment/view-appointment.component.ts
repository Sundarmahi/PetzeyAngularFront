import { Component, OnInit } from '@angular/core';
import { ViewAppointmentDetailsComponent } from '../view-appointment-details/view-appointment-details.component';
import { ViewPrescriptionComponent } from '../../../../shared/components/view-prescription/view-prescription.component';
import { RouterOutlet } from '@angular/router';
import { ViewVitalsComponent } from '../../../../shared/components/view-vitals/view-vitals.component';
import { ViewSymptomsComponent } from '../../../../shared/components/view-symptoms/view-symptoms.component';
import { ViewTestsComponent } from '../../../../shared/components/view-tests/view-tests.component';
import { ViewRecommendedDoctorsComponent } from '../view-recommended-doctors/view-recommended-doctors.component';
import { ViewCommentsComponent } from '../view-comments/view-comments.component';
import { CloseAppointmentComponent } from '../close-appointment/close-appointment.component';

import { ViewVetComponent } from '../view-vet/view-vet.component';
import { ViewPetPetparentComponent } from '../view-pet-petparent/view-pet-petparent.component';
import { Appointment } from '../../../models/appointment';
import { environment } from '../../../../../environments/environment';
import { AppointmentService } from '../../../services/appointment-service';
import { VitalsSymptomsComponent } from '../vitals-symptoms/vitals-symptoms.component';

@Component({
  selector: 'app-view-appointment',
  standalone: true,
  imports: [ViewAppointmentDetailsComponent,ViewPrescriptionComponent,RouterOutlet,VitalsSymptomsComponent,
            ViewSymptomsComponent,ViewTestsComponent,ViewRecommendedDoctorsComponent,
            ViewCommentsComponent,CloseAppointmentComponent,
            ViewVetComponent,ViewPetPetparentComponent],
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.css'
})
export class ViewAppointmentComponent implements OnInit{

    
  dashboardactiveColor: string = '#18385C'; 
  dashboardbg:string='#ffffff';
  petsactiveColor: string = '#ffffff';
  petsbg:string='' ;
  profileactiveColor: string = '#ffffff'; 
  profilebg:string='';

  handleMenuItemClick(menuItem: string): void {
    this.resetMenuItems();

    switch (menuItem) {
      case 'dashboard':
        this.dashboardactiveColor = '#18385C';
        this.dashboardbg='#ffffff'
        break;
      case 'pets':
        this.petsactiveColor = '#18385C';
        this.petsbg='#ffffff'
        break;
      case 'profile':
        this.profileactiveColor = '#18385C';
        this.profilebg='#ffffff'
        break;
    }
  }

  resetMenuItems(): void {
    this.dashboardactiveColor = '#ffffff';
    this.dashboardbg='';
    this.petsactiveColor = '#ffffff';
    this.petsbg='';
    this.profileactiveColor = '#ffffff'; 
    this.profilebg='';
  }
  constructor(private appointmentService: AppointmentService) {

  }
  url = environment.domain;
  appointment: Appointment = new Appointment();
  ngOnInit() {
    this.appointmentService.getAppointmentDetails(1).subscribe(data => {
      this.appointment = data;
      console.log(this.appointment.pet);
    });

  }
}