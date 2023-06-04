import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { TicketDetails } from '../ticket-details.model';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {

  uniqueId!: string;

  constructor(private ticketService: TicketService, private router: Router) { };

  ngOnInit(): void {
  }

  getTicket(uniqueId: string) {
    if (uniqueId === undefined) {
      alert("Please enter Ticket ID");
    }
    this.router.navigate(['display-ticket', uniqueId]);
  }

}
