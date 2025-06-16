import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastFacade } from '@weather/forecast-state';
import { SearchFacade } from '@weather/search-state';
import {
  ForecastByCoordinateApiService,
  ForecastByCityApiService,
} from '@weather/api-services';
import { SearchBarComponent } from '@weather/search';
import { GeolocationComponent } from '@weather/geolocation';
import { SummaryCardComponent } from '@weather/summary-card';
import { DetailCardComponent } from '@weather/detail-card';

@Component({
  selector: 'lib-landing-page',
  imports: [
    CommonModule,
    SearchBarComponent,
    GeolocationComponent,
    SummaryCardComponent,
    DetailCardComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements OnInit {
  // todo move to private if not used in template
  public forcastFacade = inject(ForecastFacade);
  public searchFacade = inject(SearchFacade);
  public api = inject(ForecastByCoordinateApiService);
  public apiCity = inject(ForecastByCityApiService);

  // observables
  searchLoading$ = this.searchFacade.loading$;
  locations$ = this.searchFacade.locations$;
  selectedLocation$ = this.searchFacade.selectedLocation$;

  ngOnInit() {
    this.load();
    this.loadCity();
  }

  load() {
    // this.api.getForecast(40.71, -74.01).subscribe({
    //   next: (forecast) => console.log(forecast),
    // });
  }

  loadCity() {
    //   this.apiCity.getForecastByCity('Pretoria').subscribe({
    //     next: (forecast) => console.log(forecast),
    //   });
  }

  onSelectLocation(locationId: number) {
    this.searchFacade.selectLocation(locationId);
  }

  onDeleteLocation(locationId: number) {
    this.searchFacade.deleteLocation(locationId);
  }
}
