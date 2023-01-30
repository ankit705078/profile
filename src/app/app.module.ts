import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillComponent } from './Components/skill/skill.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { ProjectComponent } from './Components/project/project.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { InterestComponent } from './Components/interest/interest.component';
import { InterestsComponent } from './Components/interests/interests.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CertificationComponent } from './Components/certification/certification.component';
import { CertificationsComponent } from './Components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    SkillsComponent,
    ExperienceComponent,
    ExperiencesComponent,
    ProjectComponent,
    ProjectsComponent,
    InterestComponent,
    InterestsComponent,
    HeaderComponent,
    FooterComponent,
    CertificationComponent,
    CertificationsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
