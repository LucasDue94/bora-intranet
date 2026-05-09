import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  imports: [AvatarModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
  host: {
    class:
      'app-header surface-card text-color surface-border border-bottom-1 flex align-items-center justify-content-between gap-3 px-4',
  },
})
export class AppHeader {}
