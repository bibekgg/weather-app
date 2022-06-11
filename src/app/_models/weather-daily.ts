import { WeatherInfo } from "./weather-current";

export interface WeatherDaily extends WeatherInfo {
  temp: {
    min: number;
    max: number;
    unit: string;
  }
}
