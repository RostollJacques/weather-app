import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions/search.actions';
import { Coordinate } from '@weather/models';

export const searchFeatureKey = 'search';

export interface SearchState {
  loading: boolean;
  error?: string;
  userLocation?: Coordinate;
}

export const initialState: SearchState = {
  loading: false,
  error: undefined,
  userLocation: undefined,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.getGeolocation, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),

  on(SearchActions.getGeolocationSuccess, (state, { latitude, longitude }) => ({
    ...state,
    userLocation: { lat: latitude, lon: longitude },
    loading: false,
  })),

  on(SearchActions.getGeolocationFailure, (state, { error }) => ({
    ...state,
    error,
    userLocation: undefined,
    loading: false,
  }))
);
