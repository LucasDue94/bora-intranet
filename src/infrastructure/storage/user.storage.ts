import { Injectable } from '@angular/core';

import { LocalStorageSignal } from './local-storage-signal';

export interface UserStorageValue {
  id: string;
  email: string;
  username: string;
  role: string;
  isEmailVerified: boolean;
  isOnboarded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserStorage extends LocalStorageSignal<UserStorageValue> {
  constructor() {
    super('user');
  }
}
