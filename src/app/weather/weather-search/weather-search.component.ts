import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, Subscription, switchMap } from 'rxjs';
import { CitySuggestion } from 'src/app/_models';
import { WeatherService } from '../_services/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit, OnDestroy {
  isEditMode: boolean = false;
  list: CitySuggestion[] = [];
  search = new FormControl('');
  showSuggestion: boolean = false;
  searchSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.searchSubscription = this.search.valueChanges
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
    this.search.setValue(data.LocalizedName, {
      onlySelf: true,
      emitEvent: false,
    });
    this.clear();
    this.weatherService
      .getWeatherData(data.Key, data.LocalizedName)
      .subscribe();
  }

  getCurrentGeoLocation() {
    this.search.reset();
    this.weatherService.getCurrentGeoLocation();
  }

  clear() {
    this.isEditMode = false;
    this.list = [];
    this.showSuggestion = false;
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
