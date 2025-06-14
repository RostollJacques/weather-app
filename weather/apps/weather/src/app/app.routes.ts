import { Routes } from '@angular/router';
import { ShellComponent } from '@weather/shell/feature';

export const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@weather/features/forecast').then((m) => m.landingPageRoutes),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
