import { Component, ViewChild } from '@angular/core';

import { ModalController, Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AltaPage } from '../pages/alta/alta';
import { ModificacionPage } from '../pages/modificacion/modificacion';
import { BajaPage } from '../pages/baja/baja';
import { BuscarPage } from '../pages/buscar/buscar';
import { ListadoPage } from '../pages/listado/listado';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      //{ title: 'Hello Ionic', component: HelloIonicPage },
      //{ title: 'My First List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Alta', component: AltaPage },
      { title: 'Listado', component: ListadoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
