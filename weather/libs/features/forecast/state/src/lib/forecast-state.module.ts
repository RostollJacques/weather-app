import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromForecast from './reducers/forecast.reducers';
import { ForecastEffects } from './effects/forecast.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromForecast.forecastFeatureKey,
      fromForecast.forecastReducer
    ),
    EffectsModule.forFeature([ForecastEffects]),
  ],
})
export class ForecastStateModule {}
