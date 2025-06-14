import { NgModule } from '@angular/core';
import { provideState } from '@ngrx/store';
import * as fromForecast from '@weather/forecast-state';

@NgModule({
  providers: [
    provideState(fromForecast.forecastFeatureKey, fromForecast.forecastReducer),
  ],
})
export class SharedStateModule {}
