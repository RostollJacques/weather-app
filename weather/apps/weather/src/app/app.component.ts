import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'weather';
  private toastr = inject(ToastrService);
  constructor() {
    this.toastr.info('Welcome to the Weather App!', 'Hello');
  }
}
