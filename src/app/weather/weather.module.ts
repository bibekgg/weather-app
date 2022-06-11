import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { WeatherDailyCardComponent } from './weather-daily-card/weather-daily-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WeatherHighlightCardComponent } from './weather-highlight-card/weather-highlight-card.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';

@NgModule({
  declarations: [WeatherPageComponent, WeatherDailyCardComponent, WeatherHighlightCardComponent, WeatherCurrentComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class WeatherModule {}
