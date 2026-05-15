import { Injectable } from '@angular/core';

import { LocalStorageSignal } from './local-storage-signal';

export interface TokenStorageValue {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenStorage extends LocalStorageSignal<TokenStorageValue> {
  constructor() {
    super('token');
  }
}
