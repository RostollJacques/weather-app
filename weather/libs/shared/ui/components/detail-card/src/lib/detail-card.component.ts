import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherResponse } from '@weather/models';

@Component({
  selector: 'lib-detail-card',
  imports: [CommonModule],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent {
  // input signals
  location = input.required<CurrentWeatherResponse>();
}
