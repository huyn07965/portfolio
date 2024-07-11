import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Nguyễn Gia Huy'],
    ['DOB', '20/05/2001'],
    ['Work Exp', '10 Months'],
    ['Education', 'Nguyen Tat Thanh University'],
    ['Interests', 'Play Badminton'],
  ];

  aboutMe: string[] = [
    'I have over 1 year of experience in a front-end position',
    'Constantly learning to cultivate knowledge about programming to develop professional skills. In the next 1 year, I will become a Fullstack Developer.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];

}
