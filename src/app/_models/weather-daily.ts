export interface WeatherDaily {
  date: string;
  weather: {
    type: string;
    description: string;
    icon: string;
  }
  temp: {
    min: number;
    max: number;
  }
}
