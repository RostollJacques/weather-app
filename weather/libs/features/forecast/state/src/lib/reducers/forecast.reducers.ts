import { createReducer, on } from '@ngrx/store';

export const forecastFeatureKey = 'forecast';

export interface ForecastState {
  data: any;
  loading: boolean;
  error: string | null;
}

export const initialState: ForecastState = {
  data: null,
  loading: false,
  error: null,
};

export const forecastReducer = createReducer(initialState);
