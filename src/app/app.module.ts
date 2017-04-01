import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AltaPage } from '../pages/alta/alta';
import { ModificacionPage } from '../pages/modificacion/modificacion';
import { BajaPage } from '../pages/baja/baja';
import { BuscarPage } from '../pages/buscar/buscar';
import { ListadoPage } from '../pages/listado/listado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


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
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    AltaPage,
    ModificacionPage,
    BajaPage,
    BuscarPage,
    ListadoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ng2Bs3ModalModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    AltaPage,
    ModificacionPage,
    BajaPage,
    BuscarPage,
    ListadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
