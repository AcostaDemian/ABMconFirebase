import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-modificacion',
  templateUrl: 'modificacion.html'
})
export class ModificacionPage {
  persona={};
  personas:FirebaseListObservable<any[]>;

  constructor(public navParams: NavParams, public viewCtrl: ViewController,public af: AngularFire) {  
    this.personas = af.database.list('/personas');
    this.persona={
        nombre: this.navParams.get('nombre'),
        apellido:this.navParams.get('apellido'),
        dni:this.navParams.get('dni'),
        key:this.navParams.get('$key'),
      };
  }

  modificar(persona){
    // to get a key, check the Example app below
    this.personas.update(persona.key, {nombre:persona.nombre,apellido:persona.apellido});
    this.viewCtrl.dismiss();
  }

}
