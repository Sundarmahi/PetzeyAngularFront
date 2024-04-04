import { Injectable } from '@angular/core';
import { AppointmentSummary } from '../../models/appointment_summary';
import { Appointment } from '../../models/appointments';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { FeedbackFormModel } from '../../models/feedback';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAppointmentSummary(id:number): Observable<AppointmentSummary> {
   return  this.http.get<AppointmentSummary>(`${this.url}summary/`+id)
  }

  allAppointments:Appointment[]= [];

  url = environment.domain;

  getAllAppointments(id:number):Observable<Appointment[]>{

    return this.http.get<Appointment[]>(`${this.url}vet/`+id)
    
  }

  submitFeedback(appointmentId: number, feedbackData: FeedbackFormModel): Observable<any> {
    return this.http.post<any>(`${this.url}/feedback/${appointmentId}`, feedbackData);
  }
}
// 