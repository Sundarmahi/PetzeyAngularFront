import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {

  }

  url = environment.domain;
  getAppointmentDetails(id: number): Observable<Appointment>  {

    //1. create the httpclient object
    

    //2. call the backend apis (never hard code the url)

   return this.http.get<Appointment>(this.url + `get/` + id);
    
    

    //3. create appointment  object

   

    //4. store the data recieved in apppointment  object

    //5. return the appointment object
   
  }

  addAppointment(appointmentDetails: Appointment): void {

    //1. create the httpclient object

    //3. create appointment  object

    //2. call the backend apis (never hard code the url)

  }


  allAppointments: Appointment[] = [];

  getAllAppointments(): Appointment[] {
    return this.allAppointments
  }

  close_appointment(id: number): Observable<any> {
    return this.http.patch(`${this.url}/close/${id}`,{});
  }

  cancel_appointment(id: number): Observable<any>{
    return this.http.patch(`${this.url}/cancel/${id}`,{});
  }





}