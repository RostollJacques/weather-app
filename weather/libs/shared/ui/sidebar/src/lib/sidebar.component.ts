import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private router = inject(Router);

  navItems = [
    {
      label: 'Home',
      path: '/',
      icon: '/assets/icons/system/home-inactive.svg',
      activeIcon: '/assets/icons/system/home-active.svg',
    },
    {
      label: 'Settings',
      path: '/settings',
      icon: '/assets/icons/system/cog-inactive.svg',
      activeIcon: '/assets/icons/system/cog-active.svg',
    },
  ];

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
