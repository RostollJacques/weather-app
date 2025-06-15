import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromSearch from './reducers/search.reducers';
import { SearchEffects } from './effects/search.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSearch.searchFeatureKey,
      fromSearch.searchReducer
    ),
    EffectsModule.forFeature([SearchEffects]),
  ],
})
export class SearchStateModule {}
