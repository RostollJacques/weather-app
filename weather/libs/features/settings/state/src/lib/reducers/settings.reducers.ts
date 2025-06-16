import { createReducer, on } from '@ngrx/store';
import { SettingsActions } from '../actions/setting.actions';
import { Coordinate, CurrentWeatherResponse } from '@weather/models';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  loading: boolean;
  loadingGeolocation: boolean;
  error?: string;
  userLocation?: Coordinate;
  locations?: CurrentWeatherResponse[];
  currentLocationId?: number;
  selectedLocationId?: number;
}

export const initialState: SettingsState = {
  loading: false,
  loadingGeolocation: false,
  error: undefined,
  userLocation: undefined,
  locations: undefined,
  currentLocationId: undefined,
  selectedLocationId: undefined,
};

export const settingsReducer = createReducer(
  initialState

  // search geolocation
  // on(SettingsActions.getGeolocation, (state) => ({
  //   ...state,
  //   loadingGeolocation: true,
  //   error: undefined,
  // }))
);
