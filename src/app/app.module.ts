import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login"; // sem a extensão na frente, o arquivo importa, por padrão o TS
import * as firebase from 'firebase';
import { UserProvider } from '../providers/user/user'; // BANCO DE DADOS

// ESSE CÓDIGO CARALHUDO AQUI CONECTA COM O FIREBASE COM AS CREDENCIAIS ESPECIFICADAS PELA PLATAFORMA
var config = {
  apiKey: "AIzaSyCQV_27iNVlgjD9Ie0fvtjzCGO8T-jsysY",
  authDomain: "fofoquinha-73969.firebaseapp.com",
  databaseURL: "https://fofoquinha-73969.firebaseio.com",
  projectId: "fofoquinha-73969",
  storageBucket: "fofoquinha-73969.appspot.com",
  messagingSenderId: "554271356702"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    OneSignal
  ]
})
export class AppModule {}
