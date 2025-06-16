import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@weather/app-config';
import { Observable } from 'rxjs';
import { Coordinate, CurrentWeatherResponse } from '@weather/models';

@Injectable({
  providedIn: 'root',
})
export class ForecastByCoordinateApiService {
  private http = inject(HttpClient);
  private appConfig = inject<AppConfig>(APP_CONFIG);

  getForecast(coordinate: Coordinate): Observable<CurrentWeatherResponse> {
    const url = `${this.appConfig.apiUrl}/weather?`;
    const params = {
      lat: coordinate.lat.toString(),
      lon: coordinate.lon.toString(),
      units: 'metric',
      appid: this.appConfig.apiKey,
    };
    return this.http.get<CurrentWeatherResponse>(url, { params });
  }
}
