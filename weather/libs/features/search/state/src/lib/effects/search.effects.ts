import { inject, Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { SearchActions } from '../actions/search.actions';
import { createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);

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

  // private method to get the geolocation
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
