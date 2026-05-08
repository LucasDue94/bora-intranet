import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './presentation/app.config';
import { App } from './presentation/layouts/app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
