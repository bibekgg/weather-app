import { Component, OnInit } from '@angular/core';
import { WeatherCurrent } from 'src/app/_models';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {
  currentWeatherData: WeatherCurrent = {
    date: 'Fri, 5 Jun',
    weather: { type: 'Sunny', description: 'thunderstorm', icon: '10d' },
    location: 'Helsinki',
    temp: {
      value: 15,
      unit: 'C'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
