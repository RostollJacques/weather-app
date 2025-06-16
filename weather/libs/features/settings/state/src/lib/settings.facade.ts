import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from './actions/setting.actions';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  private store = inject(Store);

  // loading$ = this.store.select(selectLoading);

  getGeolocation() {
    // this.store.dispatch(SettingsActions.getGeolocation());
  }
}
