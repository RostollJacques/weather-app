// libs/shell/feature/src/lib/shell.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'lib-app-shell',
  imports: [RouterOutlet],
  template: `
    <main class="p-4">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class ShellComponent {}
