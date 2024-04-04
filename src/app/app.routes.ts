import { Routes } from '@angular/router';
import { ViewAppointmentsComponent } from './appointments/components/view-appointments/view-appointments.component';
import { AppointmentSummaryComponent } from './appointments/components/appointment-summary/appointment-summary.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ViewAppointmentComponent } from './appointments/components/view/view-appointment/view-appointment.component';

import { ViewAppointmentDetailsComponent } from './appointments/components/view/view-appointment-details/view-appointment-details.component';
import { ViewCommentsComponent } from './appointments/components/view/view-comments/view-comments.component';
import { ViewPetParentComponent } from './pets/components/view-pet-parent/view-pet-parent.component';
import { ViewRecommendedDoctorsComponent } from './appointments/components/view/view-recommended-doctors/view-recommended-doctors.component';
import { ViewRecommendedClinicsComponent } from './appointments/components/view/view-recommended-clinics/view-recommended-clinics.component';
import { ViewVetComponent } from './appointments/components/view/view-vet/view-vet.component';
import { VitalsSymptomsComponent } from './appointments/components/view/vitals-symptoms/vitals-symptoms.component';

export const routes: Routes = [
    {path:'',component:ViewAppointmentsComponent},
    {path:'',component:AppointmentSummaryComponent},
    {path:'details', component:ViewAppointmentComponent},
    {path:'details', component:ViewAppointmentDetailsComponent},
    {path:'details',component:ViewCommentsComponent},
    {path:'deatails',component:ViewPetParentComponent},
    {path:'details',component:ViewRecommendedDoctorsComponent},
    {path:'details',component:ViewRecommendedClinicsComponent},
    {path:'details',component:ViewVetComponent},
    {path:'details',component:VitalsSymptomsComponent}

]
