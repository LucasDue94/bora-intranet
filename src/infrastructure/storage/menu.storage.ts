import { Injectable } from '@angular/core';

import { LocalStorageSignal } from './local-storage-signal';

export interface MenuStorageItem {
  label: string;
  icon?: string;
  routerLink?: string | string[];
  visible?: boolean;
  disabled?: boolean;
  items?: MenuStorageItem[];
}

export type MenuStorageValue = MenuStorageItem[];

@Injectable({
  providedIn: 'root',
})
export class MenuStorage extends LocalStorageSignal<MenuStorageValue> {
  constructor() {
    super('menu');
  }
}
