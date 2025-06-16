import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFacade } from '@weather/search-state';

@Component({
  selector: 'lib-geolocation',
  imports: [CommonModule],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.scss',
})
export class GeolocationComponent {
  public searchFacade = inject(SearchFacade);

  searchLoading$ = this.searchFacade.loading$;
  loadingGeolocation$ = this.searchFacade.loadingGeolocation$;
  currentLocation$ = this.searchFacade.currentLocation$;

  getGeolocation() {
    this.searchFacade.getGeolocation();
  }
}
