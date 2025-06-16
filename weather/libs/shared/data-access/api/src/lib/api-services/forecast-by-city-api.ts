import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@weather/app-config';
import { Observable } from 'rxjs';
import { CurrentWeatherResponse } from '@weather/models';

@Injectable({
  providedIn: 'root',
})
export class ForecastByCityApiService {
  private http = inject(HttpClient);
  private appConfig = inject<AppConfig>(APP_CONFIG);

  getForecast(searchString: string): Observable<CurrentWeatherResponse> {
    const url = `${this.appConfig.apiUrl}/weather`;
    const params = {
      q: searchString,
      units: 'metric',
      appid: this.appConfig.apiKey,
    };
    return this.http.get<CurrentWeatherResponse>(url, { params });
  }
}
