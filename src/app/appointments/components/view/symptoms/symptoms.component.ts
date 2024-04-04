import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './symptoms.component.html',
  styleUrl: './symptoms.component.css'
})
export class SymptomsComponent {
  symptoms = ['ECG', 'Exercise Stress Test'];
}
