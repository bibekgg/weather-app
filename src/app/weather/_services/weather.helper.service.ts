export class WeatherHelperService {
  static degreeToCompass(degree: number) {
    let val = Math.floor(degree / 22.5 + 0.5);
    let arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    return arr[val % 16];
  }
}
