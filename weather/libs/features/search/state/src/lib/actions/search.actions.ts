import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Coordinate, CurrentWeatherResponse } from '@weather/models';

export const SearchActions = createActionGroup({
  source: 'Search',
  events: {
    'Search City': props<{ searchString: string }>(),
    'Search City Success': props<{ location: CurrentWeatherResponse }>(),
    'Search City Failure': props<{ error: any }>(),

    'Search City By Coordinates': props<{ coordinate: Coordinate }>(),
    'Search City By Coordinates Success': props<{
      location: CurrentWeatherResponse;
    }>(),
    'Search City By Coordinates Failure': props<{ error: any }>(),

    'Get Geolocation': emptyProps(),
    'Get Geolocation Success': props<{ latitude: number; longitude: number }>(),
    'Get Geolocation Failure': props<{ error: string }>(),

    'Select Location': props<{ locationId: number }>(),
    'Unselect Location': emptyProps(),

    'Delete Location': props<{ locationId: number }>(),
  },
});
