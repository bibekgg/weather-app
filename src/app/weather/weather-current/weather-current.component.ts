import { Component, Input, OnInit } from '@angular/core';
import { CurrentResponse } from 'src/app/_models';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {
  @Input('currentWeatherData') currentWeatherData!: CurrentResponse;
  @Input('unitType') unitType!: 'Metric' | 'Imperial';

  constructor() {}

  ngOnInit(): void {}
}
