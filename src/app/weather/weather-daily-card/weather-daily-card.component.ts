import { Component, Input, OnInit } from '@angular/core';
import { WeatherDaily } from 'src/app/_models';

@Component({
  selector: 'app-weather-daily-card',
  templateUrl: './weather-daily-card.component.html',
  styleUrls: ['./weather-daily-card.component.scss']
})
export class WeatherDailyCardComponent implements OnInit {
  @Input('dailyData') dailyData!: WeatherDaily;

  constructor() { }

  ngOnInit(): void {
  }

}
