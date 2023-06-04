import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FormsModule } from '@angular/forms';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTicketComponent,
    BookTicketComponent,
    MenuPageComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
