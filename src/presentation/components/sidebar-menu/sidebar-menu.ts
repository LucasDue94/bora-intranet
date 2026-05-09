import { Component, input, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar-menu',
  imports: [AvatarModule, ButtonModule, MenuModule],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  host: {
    class:
      'sidebar-menu surface-card text-color surface-border border-right-1 flex flex-column gap-3 p-4',
    '[class.sidebar-menu--collapsed]': '!isOpen()',
  },
})
export class SidebarMenu {
  readonly isOpen = input.required<boolean>();
  readonly navigationItems = input.required<MenuItem[]>();
  readonly toggleMenu = output<void>();

  protected toggleSidebar(): void {
    this.toggleMenu.emit();
  }
}
