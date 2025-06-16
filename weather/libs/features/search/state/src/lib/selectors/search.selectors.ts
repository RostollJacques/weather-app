import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearchState from '../reducers/search.reducers';

export const selectSearchState =
  createFeatureSelector<fromSearchState.SearchState>(
    fromSearchState.searchFeatureKey
  );

export const selectLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);

export const selectLoadingGeolocation = createSelector(
  selectSearchState,
  (state) => state.loadingGeolocation
);

export const selectLocations = createSelector(selectSearchState, (state) => {
  const locations = state.locations ?? [];
  return [...locations].sort((a, b) => a.name.localeCompare(b.name));
});

export const selectCurrentLocationId = createSelector(
  selectSearchState,
  (state) => state.currentLocationId
);

export const selectCurrentLocation = createSelector(
  selectLocations,
  selectCurrentLocationId,
  (locations, currentId) => locations.find((loc) => loc.id === currentId)
);

export const selectSelectedLocationId = createSelector(
  selectSearchState,
  (state) => state.selectedLocationId ?? undefined
);

export const selectSelectedLocation = createSelector(
  selectLocations,
  selectSelectedLocationId,
  (locations, selectedId) => locations.find((loc) => loc.id === selectedId)
);
