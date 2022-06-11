export interface WeatherInfo {
  date: string;
  weather: {
    type: string;
    description: string;
    icon: string;
  }
}

export interface WeatherCurrent extends WeatherInfo {
  location: string;
  temp: {
    value: number;
    unit: string;
  }
}
