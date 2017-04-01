import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  personas: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,af: AngularFire) {
    
    this.personas = af.database.list('/personas');
    this.personas.subscribe(personas => {
    // items is an array
    personas.forEach(persona => {
        console.log('Persona:', persona);
      });
    });
    console.log(this.personas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
