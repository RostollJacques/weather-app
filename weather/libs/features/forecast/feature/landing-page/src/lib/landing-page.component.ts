import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFacade } from '@weather/search-state';
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
export class LandingPage {
  private searchFacade = inject(SearchFacade);

  // observables
  searchLoading$ = this.searchFacade.loading$;
  locations$ = this.searchFacade.locations$;
  selectedLocation$ = this.searchFacade.selectedLocation$;

  onSelectLocation(locationId: number) {
    this.searchFacade.selectLocation(locationId);
  }

  onDeleteLocation(locationId: number) {
    this.searchFacade.deleteLocation(locationId);
  }
}
