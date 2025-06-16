import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import * as fromSettings from './reducers/settings.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSettings.settingsFeatureKey,
      fromSettings.settingsReducer
    ),
  ],
})
export class SettingsStateModule {}
