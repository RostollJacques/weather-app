import { createActionGroup, props } from '@ngrx/store';

export const SettingsActions = createActionGroup({
  source: 'Settings',
  events: {
    'Search City': props<{ searchString: string }>(),
  },
});
