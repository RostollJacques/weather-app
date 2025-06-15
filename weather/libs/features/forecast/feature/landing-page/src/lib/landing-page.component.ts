import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastFacade } from '@weather/forecast-state';
import { SearchFacade } from '@weather/search-state';
import { ForecastApiService } from '@weather/api-services';

@Component({
  selector: 'lib-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements OnInit {
  public forcastFacade = inject(ForecastFacade);
  public searchFacade = inject(SearchFacade);
  public api = inject(ForecastApiService);

  // observables
  searchLoading$ = this.searchFacade.loading$;

  ngOnInit() {
    console.log('LandingPage initialized');
  }

  getGeolocation() {
    this.searchFacade.getGeolocation();
  }

  // this.load();
  // load() {
  //   this.api.getForecast(40.71, -74.01).subscribe({
  //     next: (forecast) => console.log(forecast),
  //   });
  // }
}
