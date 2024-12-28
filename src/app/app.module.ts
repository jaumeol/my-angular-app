import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { provideHttpClient, withFetch} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AemetPalmaComponent } from './aemet-palma/aemet-palma.component';
import { AemetSEstanyolComponent } from './aemet-sestanyol/aemet-sestanyol.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        PresentationComponent,
        AemetPalmaComponent,
        AemetSEstanyolComponent,
        CalendarComponent
      ],
    providers: [provideHttpClient(withFetch())],
    bootstrap: [AppComponent]
})

export class AppModule {}