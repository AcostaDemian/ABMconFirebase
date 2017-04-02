import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ModalPage } from '../modal/modal';
import { ModificacionPage } from '../modificacion/modificacion';

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  personas: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public af: AngularFire, public modalCtrl: ModalController) {    
    this.personas = af.database.list('/personas');
    console.log(this.personas);
  }

  modificar(persona) {
    let personaEnviar = {nombre:persona.nombre,
                        apellido:persona.apellido,
                        dni:persona.dni,
                        $key:persona.$key
                      };
    let myModal = this.modalCtrl.create(ModificacionPage,personaEnviar);
    myModal.present();
  }

  borrar(key) {
    this.personas.remove(key);
    let mensaje = {mensaje: 'SE BORRO CON EXITO'};
    let myModal = this.modalCtrl.create(ModalPage,mensaje);
    myModal.present();
  }


}
