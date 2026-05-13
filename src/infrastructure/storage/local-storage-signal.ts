import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Signal, signal, WritableSignal } from '@angular/core';

const STORAGE_PREFIX = 'bora.intranet';

export abstract class LocalStorageSignal<T> {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly state: WritableSignal<T | null>;

  readonly value: Signal<T | null>;

  protected constructor(private readonly key: string) {
    this.state = signal(this.read());
    this.value = this.state.asReadonly();
  }

  get snapshot(): T | null {
    return this.state();
  }

  set(value: T): void {
    this.state.set(value);

    if (!this.canUseStorage()) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  clear(): void {
    this.state.set(null);

    if (!this.canUseStorage()) {
      return;
    }

    localStorage.removeItem(this.storageKey);
  }

  protected get storageKey(): string {
    return `${STORAGE_PREFIX}.${this.key}`;
  }

  private read(): T | null {
    if (!this.canUseStorage()) {
      return null;
    }

    const storedValue = localStorage.getItem(this.storageKey);

    if (!storedValue) {
      return null;
    }

    try {
      return JSON.parse(storedValue) as T;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }

  private canUseStorage(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
