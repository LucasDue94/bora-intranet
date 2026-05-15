import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../../../core/services/auth.service';
import { AppHeader } from '../../components/app-header/app-header';
import { MainNavigation } from '../../components/main-navigation/main-navigation';
import { SidebarMenu } from '../../components/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-authenticated-layout',
  imports: [AppHeader, MainNavigation, SidebarMenu],
  templateUrl: './authenticated-layout.html',
  styleUrl: './authenticated-layout.scss',
})
export class AuthenticatedLayout {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly isSidebarOpen = signal(true);

  protected readonly navigationItems: MenuItem[] = [
    {
      label: 'Principal',
      items: [
        {
          label: 'Painel',
          icon: 'pi pi-home',
          routerLink: '/',
        },
        {
          label: 'Agenda',
          icon: 'pi pi-calendar',
        },
        {
          label: 'Eventos',
          icon: 'pi pi-ticket',
        },
        {
          label: 'Equipes',
          icon: 'pi pi-users',
        },
      ],
    },
    {
      label: 'Gestao',
      items: [
        {
          label: 'Financeiro',
          icon: 'pi pi-wallet',
        },
        {
          label: 'Relatorios',
          icon: 'pi pi-chart-line',
        },
        {
          label: 'Configuracoes',
          icon: 'pi pi-cog',
        },
      ],
    },
  ];

  protected toggleSidebar(): void {
    this.isSidebarOpen.update((currentValue) => !currentValue);
  }

  protected logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}
