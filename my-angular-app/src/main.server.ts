import { bootstrapApplication } from '@angular/platform-browser';
// import { HeadComponent } from './app/head/head.component';
import { config } from './app/app.config.server';

import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
