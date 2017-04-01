import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-alta',
  templateUrl: 'alta.html'
})
export class AltaPage { 
  //persona: {id: string ;nombre: string, apellido: string, dni: string};
  persona={};
  personaAlta : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.personaAlta = af.database.list('/personas');    
   }

  agregar(){
    this.personaAlta.push(this.persona)
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));  
  }

}