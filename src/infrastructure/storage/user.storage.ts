import { Injectable } from '@angular/core';

import { LocalStorageSignal } from './local-storage-signal';

export interface UserStorageValue {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  roles?: string[];
  permissions?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserStorage extends LocalStorageSignal<UserStorageValue> {
  constructor() {
    super('user');
  }
}
