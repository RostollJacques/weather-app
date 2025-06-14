// libs/shell/feature/src/lib/shell.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'lib-app-shell',
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class ShellComponent {}
