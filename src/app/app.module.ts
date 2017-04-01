import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AltaPage } from '../pages/alta/alta';
import { ModificacionPage } from '../pages/modificacion/modificacion';
import { BajaPage } from '../pages/baja/baja';
import { BuscarPage } from '../pages/buscar/buscar';
import { ListadoPage } from '../pages/listado/listado';

import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDV2BgWp1jls6jv44H9wu952xPHTuKe6II",
  authDomain: "abmfirebase.firebaseapp.com",
  databaseURL: "https://abmfirebase.firebaseio.com",
  storageBucket: "abmfirebase.appspot.com",
  messagingSenderId: "918366217581"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AltaPage,
    ModificacionPage,
    BajaPage,
    BuscarPage,
    ListadoPage,
    ModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AltaPage,
    ModificacionPage,
    BajaPage,
    BuscarPage,
    ListadoPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
