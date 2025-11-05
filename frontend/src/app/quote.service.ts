import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = `${environment.apiUrl}/send-quote`; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  sendQuote(quoteData: any): Observable<any> {
    return this.http.post(this.apiUrl, quoteData, { headers: { 'Content-Type': 'application/json' } });
  }
}
