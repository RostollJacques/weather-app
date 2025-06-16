import { inject, Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { SearchActions } from '../actions/search.actions';
import { createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  ForecastByCityApiService,
  ForecastByCoordinateApiService,
} from '@weather/api-services';

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);
  private forecastByCoordinateApiService = inject(
    ForecastByCoordinateApiService
  );
  private forecastByCityApiService = inject(ForecastByCityApiService);

  getGeolocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getGeolocation),
      switchMap(() =>
        this.getLocation().pipe(
          map(({ latitude, longitude }) =>
            SearchActions.getGeolocationSuccess({ latitude, longitude })
          ),
          catchError((err) =>
            of(
              SearchActions.getGeolocationFailure({
                error: err.message || 'Permission denied',
              })
            )
          )
        )
      )
    )
  );

  geoLocationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getGeolocationSuccess),
      map(({ latitude, longitude }) =>
        SearchActions.searchCityByCoordinates({
          coordinate: { lat: latitude, lon: longitude },
        })
      )
    )
  );

  getCityByGeolocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchCityByCoordinates),
      switchMap((action) =>
        this.forecastByCoordinateApiService.getForecast(action.coordinate).pipe(
          map((location) =>
            SearchActions.searchCityByCoordinatesSuccess({ location })
          ),
          catchError((err) =>
            of(
              SearchActions.searchCityByCoordinatesFailure({
                error: err.message || 'Failed to fetch location by coordinates',
              })
            )
          )
        )
      )
    )
  );

  getCityByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchCity),
      switchMap((action) =>
        this.forecastByCityApiService.getForecast(action.searchString).pipe(
          map((location) => SearchActions.searchCitySuccess({ location })),
          catchError((err) =>
            of(
              SearchActions.searchCityFailure({
                error: err.message || 'Failed to fetch city by name',
              })
            )
          )
        )
      )
    )
  );

  // Functions
  private getLocation(): Observable<{ latitude: number; longitude: number }> {
    console.log('Getting geolocation...');
    return new Observable((observer) => {
      if (!navigator.geolocation) {
        observer.error(new Error('Geolocation not supported'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            observer.next({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            observer.complete();
          },
          (err) => observer.error(err)
        );
      }
    });
  }
}
