import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { LoaderComponent } from '../loader/loader.component';

@Component({
    selector: 'app-file-viewer',
    imports: [FormsModule, CommonModule,LoaderComponent],
    templateUrl: './file-viewer.component.html',
    styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
    files: { name: string; type: 'pdf' | 'image'; url: SafeResourceUrl }[] = [];
    currentFile: { name: string; type: 'pdf' | 'image'; url: SafeResourceUrl } | null = null;
    currentPage = 1;
    totalPages = 0;
    @Input() category: string = '';
    private apiUrl = `${environment.apiUrl}`;
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.fetchFilesByCategory(this.category);
    }
    isLoading: boolean = false;
    fetchFilesByCategory(category: string): void {
        this.isLoading = true;
        const url = this.apiUrl + `/files?category=${category}`;
        this.http.get<string[]>(url).subscribe(
            (fileNames) => {
                this.isLoading = false;
                this.files = fileNames.map((file) => {
                    const fileType = file.endsWith('.pdf') ? 'pdf' : 'image';
                    const fileUrl = `${this.apiUrl}/assets/${file}`; // Adjusted to fetch assets from the backend
                    console.log('file:', file);
                    console.log('fileUrl:', fileUrl);
                    return {
                        name: file,
                        type: fileType,
                        url: this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl),
                    };
                });
                console.log('files:', this.files.map(f => f.url));
                this.totalPages = this.files.length;
                this.updateCurrentFile();
            },
            (error) => {
                this.isLoading = false;
                console.error(error);
            });
    }


    updateCurrentFile(): void {
        this.currentFile = this.files[this.currentPage - 1] || null;
    }

    goToPreviousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateCurrentFile();
        }
    }

    goToNextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateCurrentFile();
        }
    }

    disableRightClick(event: MouseEvent): void {
        event.preventDefault();
        alert('Right-click is disabled to prevent saving this content.');
    }

}
