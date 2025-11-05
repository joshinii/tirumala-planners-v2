import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-contact',
  imports:[FormsModule,QuoteComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactName = '';
  contactEmail = '';
  contactMessage = '';
}
