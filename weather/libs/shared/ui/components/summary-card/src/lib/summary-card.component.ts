import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherResponse } from '@weather/models';

@Component({
  selector: 'lib-summary-card',
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  // input signals
  location = input.required<CurrentWeatherResponse>();
  selectedLocationId = input.required<number>();

  // output signals
  selectLocationId = output<number>();
  deleteLocationId = output<number>();

  onSelectLocation() {
    this.selectLocationId.emit(this.location().id);
  }

  onDeleteLocation() {
    this.deleteLocationId.emit(this.location().id);
  }
}
