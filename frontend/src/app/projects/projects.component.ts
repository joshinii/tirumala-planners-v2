import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FileViewerComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

})
export class ProjectsComponent {
  constructor() { }

  category: string = 'elevation'; // Default category
  currentCategory: string = this.category; // Current category for viewer

  chooseCategory(selectedCategory: string): void {
    console.log('Category in projects:', this.category);

    this.currentCategory = ''; // Temporarily set to null to force reload
    setTimeout(() => {
      this.category = selectedCategory;
      this.currentCategory = selectedCategory;
    });
  }
}
