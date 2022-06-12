import { Component, Input, OnInit } from '@angular/core';
import { WeatherHighlight } from 'src/app/_models';

@Component({
  selector: 'app-weather-highlight-card',
  templateUrl: './weather-highlight-card.component.html',
  styleUrls: ['./weather-highlight-card.component.scss'],
})
export class WeatherHighlightCardComponent implements OnInit {
  @Input('highlightData') highlightData!: WeatherHighlight;
  @Input('unitType') unitType!: 'Metric' | 'Imperial';

  constructor() {}

  ngOnInit(): void {}
}
