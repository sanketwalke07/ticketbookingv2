import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { TicketDetails } from '../ticket-details.model';

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.scss']
})
export class DisplayTicketComponent implements OnInit {
  uniqueId!: string;
  ticketDetails: TicketDetails = new TicketDetails();

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getTicket();
  }

  private getTicket() {
    this.uniqueId = this.route.snapshot.params['uniqueId'];
    this.ticketService.getTicket(this.uniqueId).subscribe(data => {
      this.ticketDetails = data;
    });
  }

  confirmTicket(uniqueId: string) {
    this.ticketService.confirmTicket(uniqueId).subscribe({
      next: (data) => {
        this.ticketService.getTicket(this.uniqueId).subscribe(data => {
          this.ticketDetails = data;
        });
      },
      error: (e) => {
        console.log(e);
      }
    });
    
  }
}
