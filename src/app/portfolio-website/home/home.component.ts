import { EducationComponent } from './../education/education.component';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ContactComponent } from '../contact/contact.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContactComponent, EducationComponent, PersonalInformationComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
