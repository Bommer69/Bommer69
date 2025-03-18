import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOmfDlvCG1d1NRwvRxMjKMxecd9LsESrA",
  authDomain: "my-angular-app-cc4bc.firebaseapp.com",
  projectId: "my-angular-app-cc4bc",
  storageBucket: "my-angular-app-cc4bc.firebasestorage.app",
  messagingSenderId: "163804171462",
  appId: "1:163804171462:web:d46bc103c72af944179bc7",
  measurementId: "G-BC6QBV6NHT"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};