import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  imports: [RouterOutlet],
  templateUrl: './main-navigation.html',
  styleUrl: './main-navigation.scss',
})
export class MainNavigation {
  protected readonly hasActiveRoute = signal(false);

  protected setActiveRoute(isActive: boolean): void {
    this.hasActiveRoute.set(isActive);
  }
}
