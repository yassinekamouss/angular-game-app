import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(
      () => initializeApp({
        apiKey: "AIzaSyBOOv9sEUXpvYFbj8WG1E8dON6jynnLSdY",
        authDomain: "angular-chat-app-f7c31.firebaseapp.com",
        projectId: "angular-chat-app-f7c31",
        storageBucket: "angular-chat-app-f7c31.firebasestorage.app",
        messagingSenderId: "441819692791",
        appId: "1:441819692791:web:d4cf6f7312c2280a62ddf2",
        measurementId: "G-L378C0RVBY"
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideHttpClient()
  ]
};
