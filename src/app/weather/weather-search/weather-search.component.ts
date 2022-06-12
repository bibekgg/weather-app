import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { CitySuggestion } from 'src/app/_models';
import { WeatherService } from '../_services/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  isEditMode: boolean = false;
  list: CitySuggestion[] = [];
  search = new FormControl('');
  showSuggestion: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((val) =>
          val ? this.weatherService.getAutoSuggestData(val) : of([])
        )
      )
      .subscribe((a) => {
        this.showSuggestion = true;
        this.list = a as CitySuggestion[];
      });
  }

  selected(data: CitySuggestion) {
    this.search.setValue(data.LocalizedName, { onlySelf: true, emitEvent: false });
    this.showSuggestion = false;
    this.isEditMode = false;
    this.weatherService.getWeatherData(data.Key, data.LocalizedName).subscribe();
  }

  getCurrentGeoLocation() {
    this.weatherService.getCurrentGeoLocation();
  }
}
