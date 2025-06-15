import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@weather/app-config';
import { Observable } from 'rxjs';

export interface ForecastResponse {
  lat: number;
  lon: number;
  timezone: string;
  // expand with the OpenWeather One Call response structure you expect
  current: {
    temp: number;
    humidity: number;
    weather: { description: string }[];
    wind_speed: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ForecastApiService {
  private http = inject(HttpClient);
  private appConfig = inject<AppConfig>(APP_CONFIG);

  getForecast(lat: number, lon: number): Observable<ForecastResponse> {
    const url = `${this.appConfig.apiUrl}/weather?`;
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      units: 'metric',
      appid: this.appConfig.apiKey,
    };
    return this.http.get<ForecastResponse>(url, { params });
  }
}
