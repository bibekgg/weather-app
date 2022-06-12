import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WeatherPageComponent } from './weather-page/weather-page.component';
import { WeatherDailyCardComponent } from './weather-daily-card/weather-daily-card.component';
import { WeatherHighlightCardComponent } from './weather-highlight-card/weather-highlight-card.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@NgModule({
  declarations: [WeatherPageComponent, WeatherDailyCardComponent, WeatherHighlightCardComponent, WeatherCurrentComponent, WeatherSearchComponent],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule, HttpClientModule],
})
export class WeatherModule {}
