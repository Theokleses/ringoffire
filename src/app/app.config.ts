import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ring-of-fire-7a7f5',
        appId: '1:177403389572:web:d6d41ae2314a83cb3bc4d1',
        storageBucket: 'ring-of-fire-7a7f5.firebasestorage.app',
        apiKey: 'AIzaSyBwMZfXFLSowLM0O6kMTEdFdAO5zeUE3Kk',
        authDomain: 'ring-of-fire-7a7f5.firebaseapp.com',
        messagingSenderId: '177403389572',
        // projectNumber: '177403389572',
        // version: '2',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
