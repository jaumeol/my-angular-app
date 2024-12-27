import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
import { AemetPalmaComponent } from './aemet-palma/aemet-palma.component';
import { AemetSEstanyolComponent } from './aemet-sestanyol/aemet-sestanyol.component';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    AemetPalmaComponent,
    AemetSEstanyolComponent,
    CalendarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }