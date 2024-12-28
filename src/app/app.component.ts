import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';

@Component({
  imports: [RouterOutlet, PresentationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'la meva primera aplicació angular feta amb Copilot';
}
