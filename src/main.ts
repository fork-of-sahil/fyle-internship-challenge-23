import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'; if (environment.production) { enableProdMode(); }
import { AppModule } from './app/app.module';
import { environment } from './app/environment/environment.prod';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
