
// Main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//Just in Time (JIT)

//Ahead of Time (AOT)

// import { platformBrowser} from '@angular/platform-browser';
// import { AppModuleNgFactory } from './app.module.ngfactory';

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);