import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions/search.actions';
import { Coordinate, CurrentWeatherResponse } from '@weather/models';

export const searchFeatureKey = 'search';

export interface SearchState {
  loading: boolean;
  loadingGeolocation: boolean;
  error?: string;
  userLocation?: Coordinate;
  locations?: CurrentWeatherResponse[];
  currentLocationId?: number;
  selectedLocationId?: number;
}

export const initialState: SearchState = {
  loading: false,
  loadingGeolocation: false,
  error: undefined,
  userLocation: undefined,
  locations: undefined,
  currentLocationId: undefined,
  selectedLocationId: undefined,
};

export const searchReducer = createReducer(
  initialState,

  // search geolocation
  on(SearchActions.getGeolocation, (state) => ({
    ...state,
    loadingGeolocation: true,
    error: undefined,
  })),

  on(SearchActions.getGeolocationSuccess, (state, { latitude, longitude }) => ({
    ...state,
    userLocation: { lat: latitude, lon: longitude },
    loadingGeolocation: false,
  })),

  on(SearchActions.getGeolocationFailure, (state, { error }) => ({
    ...state,
    error,
    userLocation: undefined,
    loadingGeolocation: false,
  })),

  // search city by coordinates
  on(SearchActions.searchCityByCoordinates, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),

  on(SearchActions.searchCityByCoordinatesSuccess, (state, { location }) => {
    const alreadyExists = state.locations?.some(
      (loc) => loc.name.toLowerCase() === location.name.toLowerCase()
    );

    return {
      ...state,
      loading: false,
      locations: alreadyExists
        ? state.locations
        : [...(state.locations ?? []), location],
      currentLocationId: location.id,
    };
  }),

  on(SearchActions.searchCityByCoordinatesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    currentLocationId: undefined,
  })),

  //select location
  on(SearchActions.selectLocation, (state, { locationId }) => ({
    ...state,
    selectedLocationId: locationId,
  })),

  on(SearchActions.unselectLocation, (state) => ({
    ...state,
    selectedLocationId: undefined,
  })),

  // seach city
  on(SearchActions.searchCity, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),

  on(SearchActions.searchCitySuccess, (state, { location }) => {
    const alreadyExists = state.locations?.some(
      (loc) => loc.name.toLowerCase() === location.name.toLowerCase()
    );

    return {
      ...state,
      loading: false,
      locations: alreadyExists
        ? state.locations
        : [...(state.locations ?? []), location],
    };
  }),

  on(SearchActions.searchCityFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // delete location
  on(SearchActions.deleteLocation, (state, { locationId }) => {
    const deletedLocation = state.locations?.find(
      (loc) => loc.id === locationId
    );

    const shouldClearUserLocation =
      state.userLocation &&
      deletedLocation &&
      deletedLocation.coord.lat === state.userLocation.lat &&
      deletedLocation.coord.lon === state.userLocation.lon;

    return {
      ...state,
      locations: state.locations?.filter((loc) => loc.id !== locationId),
      currentLocationId:
        state.currentLocationId === locationId
          ? undefined
          : state.currentLocationId,
      selectedLocationId:
        state.selectedLocationId === locationId
          ? undefined
          : state.selectedLocationId,
      userLocation: shouldClearUserLocation ? undefined : state.userLocation,
    };
  })
);
