import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';

const BoraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fbffe6',
      100: '#f3ffc2',
      200: '#eaff8a',
      300: '#e1ff52',
      400: '#d9ff1f',
      500: '#d4ff00',
      600: '#b9df00',
      700: '#8faf00',
      800: '#667d00',
      900: '#3d4a00',
      950: '#252d00',
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f4f4f4',
          100: '#e4e6e7',
          200: '#c8ccd0',
          300: '#b0b6bb',
          400: '#8f969d',
          500: '#6b7280',
          600: '#555b63',
          700: '#3a3a3a',
          800: '#2c2c2c',
          900: '#1e1e1e',
          950: '#121212',
        },
        primary: {
          color: '{primary.500}',
          contrastColor: '#121212',
          hoverColor: '{primary.300}',
          activeColor: '{primary.600}',
        },
        text: {
          color: '#f4f4f4',
          hoverColor: '#ffffff',
          mutedColor: '#b0b6bb',
          hoverMutedColor: '#f4f4f4',
        },
        content: {
          background: '#1e1e1e',
          hoverBackground: '#2c2c2c',
          borderColor: '#2c2c2c',
          color: '#f4f4f4',
          hoverColor: '#ffffff',
        },
        navigation: {
          item: {
            focusBackground: '#2c2c2c',
            activeBackground: '#2c2c2c',
            color: '#b0b6bb',
            focusColor: '#f4f4f4',
            activeColor: '#f4f4f4',
            icon: {
              color: '#b0b6bb',
              focusColor: '#d4ff00',
              activeColor: '#d4ff00',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '#6b7280',
          },
          submenuIcon: {
            color: '#b0b6bb',
            focusColor: '#d4ff00',
            activeColor: '#d4ff00',
          },
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: BoraPreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    }),
  ],
};
