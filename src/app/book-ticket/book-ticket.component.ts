import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { TicketDetails } from '../ticket-details.model';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent {
  ticketDetails: TicketDetails = new TicketDetails();

  constructor(private ticketService: TicketService, private router: Router) { };

  ngOnInit(): void {
  }

  bookTicket() {

    this.ticketService.bookTicket(this.ticketDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['display-ticket', data.uniqueId]);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit() {
    console.log(this.ticketDetails);
    
    if (!this.ticketDetails.email) {
      alert("Please enter Email");
      return;
    }
    if (!this.ticketDetails.firstName) {
      alert("Please enter First Name");
      return;
    }
    if (!this.ticketDetails.lastName) {
      alert("Please enter Last Name");
      return;
    }
    if (!this.ticketDetails.origin) {
      alert("Please enter Origin");
      return;
    }
    if (!this.ticketDetails.destination) {
      alert("Please enter Destination");
      return;
    }
    this.bookTicket();
  }
}
