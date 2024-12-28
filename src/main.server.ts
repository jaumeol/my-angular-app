import { platformServer } from '@angular/platform-server';
import { AppModule } from './app/app.module';
import { config } from './app/app.config.server';

const bootstrap = () => platformServer().bootstrapModule(AppModule);

export default bootstrap;
