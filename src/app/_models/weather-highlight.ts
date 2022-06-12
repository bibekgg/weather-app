import { WeatherUnit } from './weather-response';

interface ExtraData {
  type: string;
  value: number;
  description?: string;
}

export class WeatherHighlight {
  title: string;
  data: WeatherUnit;
  extraData?: ExtraData;
  constructor(title: string, data: WeatherUnit, extraData?: ExtraData) {
    this.title = title;
    this.data = data;
    if (extraData) {
      this.extraData = extraData;
    }
  }
}
