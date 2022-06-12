import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import {
  CurrentResponse,
  DailyForecast,
  WeatherHighlight,
} from 'src/app/_models';
import { WeatherService } from '../_services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  unitType: 'Metric' | 'Imperial' = 'Metric';

  highlightData: WeatherHighlight[] = [];

  dailyWeatherData: DailyForecast[] = [];
  currentWeatherData!: CurrentResponse;

  loading = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCurrentGeoLocation();
    this.weatherService.weatherData.pipe(skip(1)).subscribe((data) => {
      this.loading = false;
      this.dailyWeatherData = data.daily;
      this.currentWeatherData = data.current;
      this.highlightData = [
        new WeatherHighlight('Wind status', data.current.Wind.Speed, {
          type: 'wind',
          value: data.current.Wind.Direction.Degrees,
          description: data.current.Wind.Direction.English,
        }),
        new WeatherHighlight(
          'Humidity',
          {
            Metric: { Value: data.current.RelativeHumidity, Unit: '%' },
            Imperial: { Value: data.current.RelativeHumidity, Unit: '%' },
          },
          {
            type: 'humidity',
            value: data.current.RelativeHumidity,
          }
        ),
        new WeatherHighlight('Visibility', data.current.Visibility),
        new WeatherHighlight('Air Pressure', data.current.Pressure),
      ];
    });
  }

  changeUnitType(unitType: 'Metric' | 'Imperial') {
    if (unitType !== this.unitType) {
      this.loading = true;
      this.unitType = unitType;
      this.weatherService.changeUnit(unitType);
    }
  }
}
