import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { AemetPalmaComponent } from './aemet-palma/aemet-palma.component';
import { AemetSEstanyolComponent } from './aemet-sestanyol/aemet-sestanyol.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
  { path: 'presentation', component: PresentationComponent },
  { path: 'palma', component: AemetPalmaComponent },
  { path: 'estanyol', component: AemetSEstanyolComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
