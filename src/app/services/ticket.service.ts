import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketDetails } from '../ticket-details.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private basUrl = "http://3.138.179.15:8080/users/v1"
  // http://3.138.179.15:8080/users/v1/home

  constructor(private httpClient: HttpClient) {
  }

  getTicket(uniqueId: string): Observable<TicketDetails> {
    return this.httpClient.get<TicketDetails>(`${this.basUrl}/${uniqueId}`);
  }

  bookTicket(ticketDetails: TicketDetails): Observable<TicketDetails> {
    return this.httpClient.post<TicketDetails>(`${this.basUrl}/save-ticket`, ticketDetails);
  }

  confirmTicket(uniqueId: string): Observable<TicketDetails> {
    return this.httpClient.get<TicketDetails>(`${this.basUrl}/confirm-ticket/${uniqueId}`);
  }
}
