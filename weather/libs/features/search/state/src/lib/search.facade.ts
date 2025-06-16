import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchActions } from './actions/search.actions';
import {
  selectCurrentLocation,
  selectLoading,
  selectLoadingGeolocation,
  selectLocations,
  selectSelectedLocation,
} from './selectors/search.selectors';

@Injectable({
  providedIn: 'root',
})
export class SearchFacade {
  private store = inject(Store);

  loading$ = this.store.select(selectLoading);
  loadingGeolocation$ = this.store.select(selectLoadingGeolocation);
  currentLocation$ = this.store.select(selectCurrentLocation);
  locations$ = this.store.select(selectLocations);
  selectedLocation$ = this.store.select(selectSelectedLocation);

  getGeolocation() {
    this.store.dispatch(SearchActions.getGeolocation());
  }

  searchCityName(searchString: string) {
    this.store.dispatch(SearchActions.searchCity({ searchString }));
  }

  selectLocation(locationId: number) {
    this.store.dispatch(SearchActions.selectLocation({ locationId }));
  }

  unselectLocation() {
    this.store.dispatch(SearchActions.unselectLocation());
  }

  deleteLocation(locationId: number) {
    this.store.dispatch(SearchActions.deleteLocation({ locationId }));
  }
}
