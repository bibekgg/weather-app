export interface WeatherHighlight {
  title: string;
  value: string | number;
  unit: string;
  extraData?: {
    type: string;
    value: number;
  }
}
