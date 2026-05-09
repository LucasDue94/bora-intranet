import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

import { SidebarMenu } from '../../components/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvatarModule, SidebarMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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
}
