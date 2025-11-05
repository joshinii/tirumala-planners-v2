import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { CTA } from './cta/cta.component';
import { Steps } from './steps/steps.component';
import { Testimonial } from './testimonial/testimonial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    HeroComponent,
    ProjectsComponent,
    ContactComponent,
    CTA,
    Steps,
    Testimonial
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.onload = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
    };
  }
  title = 'website';
}
