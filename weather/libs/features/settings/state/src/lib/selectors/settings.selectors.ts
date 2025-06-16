import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSettingsState from '../reducers/settings.reducers';

export const selectSearchState =
  createFeatureSelector<fromSettingsState.SettingsState>(
    fromSettingsState.searchFeatureKey
  );

export const selectLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);
