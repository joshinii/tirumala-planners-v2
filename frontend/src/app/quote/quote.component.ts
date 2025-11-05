import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quote',
  imports: [FormsModule, LoaderComponent],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  name = '';
  email = '';
  phone = '';
  message = '';

  constructor(private quoteService: QuoteService, private snackBar: MatSnackBar) { }
  isLoading: boolean = false;

  onSubmit() {
    this.isLoading = true;
    const quoteData = { name: this.name, email: this.email, phone: this.phone, message: this.message };

    this.quoteService.sendQuote(quoteData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.snackBar.open(`Thank you, ${this.name}. Your message has been sent.`, 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar'],
        });
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        this.snackBar.open('Failed to send your message. Please try again.', 'Retry', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
        console.error('Error:', error);
      },
    });
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
