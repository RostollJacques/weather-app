import { NgModule } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as fromForecast from '@weather/forecast-state';
import * as fromSearch from '@weather/search-state';
import * as fromSettings from '@weather/setting-state';

@NgModule({
  providers: [
    provideState(fromForecast.forecastFeatureKey, fromForecast.forecastReducer),
    provideState(fromSearch.searchFeatureKey, fromSearch.searchReducer),
    provideState(fromSettings.settingsFeatureKey, fromSettings.settingsReducer),
    provideEffects(fromSearch.SearchEffects),
    provideEffects(fromForecast.ForecastEffects),
  ],
})
export class SharedStateModule {}
