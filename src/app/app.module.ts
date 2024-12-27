import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router' 

import { AppRoutingModule } from './app-routing.module';
// import { PresentationComponent } from './presentation/presentation.component';
// import { AemetPalmaComponent } from './aemet-palma/aemet-palma.component';
// import { AemetSEstanyolComponent } from './aemet-sestanyol/aemet-sestanyol.component';
// import { CalendarComponent } from './calendar/calendar.component';

import { AppComponent } from './app.component'; // Import AppComponent
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

@NgModule({
  declarations: [ 
    AppComponent,
    // PresentationComponent,
    // AemetPalmaComponent,
    // AemetSEstanyolComponent,
    // CalendarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})


export class AppModule { }