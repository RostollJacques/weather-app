import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ForecastSelectors from './selectors/forecast.selectors';

@Injectable({
  providedIn: 'root',
})
export class ForecastFacade {
  private store = inject(Store);

  forecast$: Observable<any> = this.store.pipe(
    select(ForecastSelectors.selectForecastData)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select(ForecastSelectors.selectForecastLoading)
  );
  error$: Observable<any> = this.store.pipe(
    select(ForecastSelectors.selectForecastError)
  );

  loadForecast(location: string) {
    // this.store.dispatch(ForecastActions.loadForecast({ location }));
  }
}
