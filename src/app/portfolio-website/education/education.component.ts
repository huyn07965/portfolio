import { Component } from '@angular/core';
import { Education } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "University of Pennsylvania's",
      course: 'MBA',
      duration: '2000-2002',
      score: '80%',
    },
    {
      institute: 'Stanford University',
      course: 'M.S in Material Science',
      duration: '1993-1995',
      score: '75%',
    },
    {
      institute: 'IIT (Madras)',
      course: 'BTech in Metallurgical Engineering',
      duration: '1989-1993',
      score: '85%',
    },
    {
      institute: 'Vana Vani School',
      course: 'HSC',
      duration: '1988-1989',
      score: '80%',
    },
    {
      institute: 'Vana Vani School',
      course: 'SSC',
      duration: '1986-1988',
      score: '90%',
    },
  ];

}
