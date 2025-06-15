import {
  ApplicationConfig,
  provideZoneChangeDetection,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';
import { SharedStateModule } from '@weather/shared-state';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAppConfig } from '@weather/app-config';
import { authInterceptorfn } from '@weather/api-services';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),

    provideAppConfig(environment),
    provideHttpClient(withInterceptors([authInterceptorfn])),

    provideStore(),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    importProvidersFrom(SharedStateModule),
  ],
};
