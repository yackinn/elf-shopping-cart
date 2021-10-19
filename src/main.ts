import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { actionsDispatcher } from '@ngneat/effects';
import { devTools } from '@ngneat/elf-devtools';

if (environment.production) {
  enableProdMode();
} else {
  devTools({
    actionsDispatcher: actionsDispatcher
  });
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
