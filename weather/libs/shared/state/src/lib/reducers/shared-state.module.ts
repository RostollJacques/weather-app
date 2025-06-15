import { NgModule } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as fromForecast from '@weather/forecast-state';
import * as fromSearch from '@weather/search-state';

@NgModule({
  providers: [
    provideState(fromForecast.forecastFeatureKey, fromForecast.forecastReducer),
    provideState(fromSearch.searchFeatureKey, fromSearch.searchReducer),
    provideEffects(fromSearch.SearchEffects),
    provideEffects(fromForecast.ForecastEffects),
  ],
})
export class SharedStateModule {}
