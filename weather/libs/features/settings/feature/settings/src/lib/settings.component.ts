import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-settings',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);

  unitsForm: FormGroup = this.fb.group({
    temperatureUnit: ['metric'],
    windSpeedUnit: ['m/s'],
  });

  saveSettings() {
    this.toastr.info('Under construction, Coming Soon!');
  }
}
