import { Component, OnInit } from '@angular/core';
import { AemetService } from '../aemet.service';
import { CommonModule} from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})

export class PresentationComponent implements OnInit {
  weatherData: any;

  constructor(private aemetService: AemetService) { }

  ngOnInit(): void {
    this.aemetService.getWeatherData().subscribe(data => {
      this.weatherData = data;
    });
  }
}
