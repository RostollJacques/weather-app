// libs/shell/feature/src/lib/shell.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@weather/sidebar';

@Component({
  standalone: true,
  selector: 'lib-app-shell',
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex min-h-screen">
      <lib-sidebar class="mx-5 my-5"></lib-sidebar>

      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class ShellComponent {}
