
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { WorkExperienceComponent } from './portfolio-website/work-experience/work-experience.component';
import { SkillsComponent } from './portfolio-website/skills/skills.component';
import { EducationComponent } from './portfolio-website/education/education.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';
import { BannerComponent } from './portfolio-website/banner/banner.component';
import { PersonalInformationComponent } from './portfolio-website/personal-information/personal-information.component';
import { ProjectsComponent } from './portfolio-website/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent, ContactComponent, EducationComponent, PersonalInformationComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.pcMode = false;

              if (breakpoint === Breakpoints.WebLandscape) this.pcMode = true;
            }
        },
      });
  }
}
