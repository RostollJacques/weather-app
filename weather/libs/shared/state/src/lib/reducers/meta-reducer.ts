import { localStorageSync } from 'ngrx-store-localstorage';
import { MetaReducer } from '@ngrx/store';

export function localStorageSyncReducer(reducer: any) {
  return localStorageSync({
    keys: ['forecast', 'search'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
