import { Time } from "@angular/common";
import { Pet } from "../../pets/models/pet";
import { PetParent } from "../../pets/models/pet_parent";
import { Vet } from "../../vets/models/vet";
import { AppointmentReport } from "./appointment_report";

export class Appointment {
    appointmentId: number = 0;
    appointmentDate: Date = new Date;
    vet: Vet = new Vet;
    petParent: PetParent = new PetParent;
    pet: Pet = new Pet;
    appointment_time: Time | undefined ;
    pet_issues: string = '';
    reasons_for_visit: string = '';
    appointmentReport: AppointmentReport=new AppointmentReport();
}