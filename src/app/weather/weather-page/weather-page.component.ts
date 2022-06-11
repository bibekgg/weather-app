import { Component, OnInit } from '@angular/core';
import { WeatherDaily, WeatherHighlight } from 'src/app/_models';
import { WeatherHelperService } from '../_services/weather.helper.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  unitType: 'metric' | 'imperial' = 'metric';

  highlightData: WeatherHighlight[] = [
    {
      title: 'Wind status',
      value: 7,
      unit: 'mph',
      extraData: { type: 'wind', value: 300 },
    },
    {
      title: 'Humidity',
      value: 84,
      unit: '%',
      extraData: { type: 'progress', value: 84 },
    },
    { title: 'Visibility', value: 6.4, unit: 'miles' },
    { title: 'Air Pressure', value: 998, unit: 'mb' },
  ];

  dailyWeatherData: WeatherDaily[] = [
    {
      date: 'Tomorrow',
      weather: { type: 'Sunny', description: 'thunderstorm', icon: '10d' },
      temp: { min: 11, max: 16 },
    },
    {
      date: 'Sun, 7 Jun',
      weather: { type: 'Sunny', description: 'scattered clouds', icon: '10d' },
      temp: { min: 11, max: 16 },
    },
    {
      date: 'Sun, 7 Jun',
      weather: {
        type: 'Sunny',
        description: 'scattered thunderstorm clouds',
        icon: '04n',
      },
      temp: { min: 11, max: 16 },
    },
    {
      date: 'Sun, 7 Jun',
      weather: { type: 'Sunny', description: 'clear sky	', icon: '11d' },
      temp: { min: 11, max: 16 },
    },
    {
      date: 'Sun, 7 Jun',
      weather: { type: 'Sunny', description: 'snow', icon: '01d' },
      temp: { min: 11, max: 16 },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeUnitType(unitType: 'metric' | 'imperial') {
    if (unitType !== this.unitType) {
      this.unitType = unitType;
    }
  }

  getDirection(degree: number) {
    return WeatherHelperService.degreeToCompass(degree);
  }
}
