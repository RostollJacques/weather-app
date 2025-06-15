import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchActions } from './actions/search.actions';

@Injectable({
  providedIn: 'root',
})
export class SearchFacade {
  private store = inject(Store);

  loading$ = this.store.select((state) => state.search.loading);

  getGeolocation() {
    this.store.dispatch(SearchActions.getGeolocation());
  }
}
