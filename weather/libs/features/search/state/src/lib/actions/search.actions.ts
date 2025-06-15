import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SearchActions = createActionGroup({
  source: 'Search',
  events: {
    'Search City': props<{ location: string }>(),
    'Search City Success': props<{ forecast: any }>(),
    'Search City Failure': props<{ error: any }>(),

    'Get Geolocation': emptyProps(),
    'Get Geolocation Success': props<{ latitude: number; longitude: number }>(),
    'Get Geolocation Failure': props<{ error: string }>(),
  },
});
