import { Route } from '@angular/router';
import { LandingPage } from './landing-page.component';
import { SettingsComponent } from '@weather/settings';

export const landingPageRoutes: Route[] = [
  { path: '', component: LandingPage },
  { path: 'settings', component: SettingsComponent },
];
