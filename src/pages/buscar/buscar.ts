import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {
  myModel: any;
  personas: FirebaseListObservable<any[]>;
  //persona: Array<{id: string ;nombre: string, apellido: string, dni: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.personas = af.database.list('/personas')
  }

  buscar(myModel) {

  }  

}
