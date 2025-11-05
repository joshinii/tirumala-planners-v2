import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  isModalOpen = false;
  private apiUrl = environment.apiUrl;

  ngOnInit() {
    this.initializeProjects();
  }

  initializeProjects() {
    // Define project data based on existing residential projects
    this.projects = [
      {
        id: 1,
        title: 'Modern Residential Elevation',
        description: 'Contemporary elevation design featuring clean lines and modern aesthetics. This residential project showcases innovative architectural planning with attention to detail and functional design principles.',
        imageUrl: `${this.apiUrl}/assets/elevation_1.jpg`,
        category: 'elevation',
        filename: 'elevation_1.jpg'
      },
      {
        id: 2,
        title: 'Classic Residential Elevation',
        description: 'Traditional elevation design with elegant proportions and timeless appeal. Expertly crafted architectural drawings that balance aesthetic beauty with structural requirements.',
        imageUrl: `${this.apiUrl}/assets/elevation_2.jpg`,
        category: 'elevation',
        filename: 'elevation_2.jpg'
      },
      {
        id: 3,
        title: 'Luxury Residential Elevation',
        description: 'Premium elevation design showcasing sophisticated architectural elements. A residential masterpiece that demonstrates precision in CADD planning and 3D visualization excellence.',
        imageUrl: `${this.apiUrl}/assets/elevation_3.jpg`,
        category: 'elevation',
        filename: 'elevation_3.jpg'
      }
    ];
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    // Restore body scroll
    document.body.style.overflow = '';
  }
}
