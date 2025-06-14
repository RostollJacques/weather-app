import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ForecastState {
  data: any; // Replace 'any' with your actual data type
  loading: boolean;
  error: string | null;
}

export const selectForecastState =
  createFeatureSelector<ForecastState>('forecast');

export const selectForecastData = createSelector(
  selectForecastState,
  (state) => state.data
);

export const selectForecastLoading = createSelector(
  selectForecastState,
  (state) => state.loading
);

export const selectForecastError = createSelector(
  selectForecastState,
  (state) => state.error
);
