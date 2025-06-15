import { createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  data: any; // Replace 'any' with your actual data type
  loading: boolean;
  error: string | null;
}

export const selectForecastState = createFeatureSelector<SearchState>('search');
