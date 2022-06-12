import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {
  CitySuggestion,
  CurrentResponse,
  DailyResponse,
  GeoPostionResponse,
  WeatherResponse,
} from 'src/app/_models';
import { environment } from 'src/environments/environment';
import {
  BehaviorSubject,
  forkJoin,
  map,
  mergeMap,
  Observable,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private unitTypeSubject: BehaviorSubject<string> = new BehaviorSubject(
    'Metric'
  );
  unitTypeData = this.unitTypeSubject.asObservable();

  private weatherDataSubject: BehaviorSubject<WeatherResponse> =
    new BehaviorSubject({} as WeatherResponse);
  weatherData = this.weatherDataSubject.asObservable();

  currentLocationKey: string = '';

  constructor(private httpClient: HttpClient) {}

  getCurrentGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getInfoWithGeoData(
            position.coords.latitude,
            position.coords.longitude
          ).subscribe();
        },
        () => {
          alert('You need to allow to get current location else use search box to search for places');
        },
        { timeout: 10000 }
      );
    }
  }

  changeUnit(unitType: 'Metric' | 'Imperial') {
    this.unitTypeSubject.next(unitType);
    this.getForeCastData(this.currentLocationKey).subscribe((daily) => {
      this.weatherDataSubject.next({ ...this.weatherDataSubject.value, daily });
    });
  }

  getAutoSuggestData(name: string) {
    const params = new HttpParams()
      .set('q', name);
    return this.httpClient.get<CitySuggestion>(
      environment.weatherAPIBaseURL + 'locations/v1/cities/autocomplete',
      {
        params,
      }
    );
  }

  getInfoWithGeoData(lat: number, lon: number) {
    const params = new HttpParams()
      .set('q', lat + ',' + lon);
    return this.httpClient
      .get<GeoPostionResponse>(
        environment.weatherAPIBaseURL +
          'locations/v1/cities/geoposition/search',
        {
          params,
        }
      )
      .pipe(mergeMap((data) => this.getWeatherData(data.Key, data.LocalizedName)));
  }

  getWeatherData(
    locationKey: string,
    location: string
  ): Observable<WeatherResponse> {
    this.currentLocationKey = locationKey;
    return forkJoin([
      this.getCurrentWeatherData(locationKey),
      this.getForeCastData(locationKey),
    ]).pipe(
      map(([current, daily]) => ({
        current: { ...current, Location: location },
        daily,
      })),
      tap(response => {
        this.weatherDataSubject.next(response);
      })
    );
  }

  private getCurrentWeatherData(locationKey: string) {
    const params = new HttpParams()
      .set('details', true);
    return this.httpClient.get<CurrentResponse[]>(
      environment.weatherAPIBaseURL + 'currentconditions/v1/' + locationKey,
      {
        params,
      }
    ).pipe(
      map(data => data[0])
    );
  }

  private getForeCastData(locationKey: string) {
    const params = new HttpParams()
      .set('metric', this.unitTypeSubject.value === 'Metric');
    return this.httpClient.get<DailyResponse>(
      environment.weatherAPIBaseURL + 'forecasts/v1/daily/5day/' + locationKey,
      {
        params,
      }
    ).pipe(
      map(data => data.DailyForecasts)
    );
  }
}
