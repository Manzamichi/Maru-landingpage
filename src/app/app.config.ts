import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular'
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { Zap, Heart, Target, Smartphone, Monitor, BookOpen, Calendar, MessageCircle, Users, Star } from 'lucide-angular/src/icons';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    LucideAngularModule.pick({ Zap, Heart, Target, Smartphone, Monitor, BookOpen, Calendar, MessageCircle, Users, Star }).providers!,
    provideHttpClient()
  ]
};