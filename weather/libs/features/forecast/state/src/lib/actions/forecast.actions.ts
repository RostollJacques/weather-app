import { createActionGroup, props } from '@ngrx/store';

export const ForecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    'Load Forecast': props<{ location: string }>(),
    'Load Forecast Success': props<{ forecast: any }>(),
    'Load Forecast Failure': props<{ error: any }>(),
  },
});
