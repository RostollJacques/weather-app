import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { SearchActions } from '../actions/search.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  ForecastByCityApiService,
  ForecastByCoordinateApiService,
} from '@weather/api-services';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);
  private forecastByCoordinateApiService = inject(
    ForecastByCoordinateApiService
  );
  private forecastByCityApiService = inject(ForecastByCityApiService);
  private toastr = inject(ToastrService);

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
                error: err.message || 'Geolocation permission denied',
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
                error: err.message || 'Could not find location by coordinates',
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
          catchError(() =>
            of(
              SearchActions.searchCityFailure({
                error: 'Could not find city by name',
              })
            )
          )
        )
      )
    )
  );

  showError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          SearchActions.searchCityFailure,
          SearchActions.getGeolocationFailure,
          SearchActions.searchCityByCoordinatesFailure
        ),
        tap(({ error }) => {
          this.toastr.error(error || 'An unexpected error occurred.');
        })
      ),
    { dispatch: false }
  );

  showSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          SearchActions.searchCitySuccess,
          SearchActions.searchCityByCoordinatesSuccess
        ),
        tap(({ location }) => {
          this.toastr.success(`Location found: ${location?.name}`);
        })
      ),
    { dispatch: false }
  );

  private getLocation(): Observable<{ latitude: number; longitude: number }> {
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
