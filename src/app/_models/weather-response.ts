interface WeatherValues {
  Value: number;
  Unit: string;
}

export interface WeatherUnit {
  Metric: WeatherValues;
  Imperial: WeatherValues;
}

export interface CurrentResponse {
  LocalObservationDateTime: string;
  WeatherText: string;
  WeatherIcon: number;
  Temperature: WeatherUnit;
  RelativeHumidity: number;
  Wind: {
    Direction: {
      Degrees: number;
      English: string;
    },
    Speed: WeatherUnit;
  };
  Visibility: WeatherUnit;
  Pressure: WeatherUnit;
  Location: string;
}

export interface DailyForecast {
  Date: string;
  Temperature: {
    Minimum: WeatherValues;
    Maximum: WeatherValues;
  };
  Day: {
    Icon: number;
    IconPhrase: string
  }
}

export interface DailyResponse {
  DailyForecasts: DailyForecast[];
}

export interface WeatherResponse {
  current: CurrentResponse;
  daily: DailyForecast[];
}
