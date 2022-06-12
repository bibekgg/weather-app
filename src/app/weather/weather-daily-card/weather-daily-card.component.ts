import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'src/app/_models';

@Component({
  selector: 'app-weather-daily-card',
  templateUrl: './weather-daily-card.component.html',
  styleUrls: ['./weather-daily-card.component.scss']
})
export class WeatherDailyCardComponent implements OnInit {
  @Input('dailyData') dailyData!: DailyForecast;

  constructor() { }

  ngOnInit(): void {
  }

}
