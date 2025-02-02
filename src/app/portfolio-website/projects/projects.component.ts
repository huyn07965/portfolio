import { Component } from '@angular/core';
import { Project } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Google Cloud, Gmail, Google Maps',
      technologies: 'Cloud Compounting, Angular, Angular Material',
      description: [
        'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
      ],
    },
    {
      title: 'ChromeOS',
      technologies: 'C, C++',
      description: [
        'Worked as a team lead to build ChromeOS',
        'Got to learn about linux kernel',
        'Learned C, C++ to build an O.S.',
      ],
    },
    {
      title: 'Google Toolbar',
      technologies: 'HTML, CSS, JS, C#',
      description: [
        'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}
}
