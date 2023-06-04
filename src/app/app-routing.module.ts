import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const routes: Routes = [
  // { path: 'display-ticket', component: DisplayTicketComponent },
  { path: 'book-ticket', component: BookTicketComponent },
  { path: 'menu-page', component: MenuPageComponent },
  { path: 'view-ticket', component: ViewTicketComponent },
  { path: 'display-ticket/:uniqueId', component: DisplayTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
