import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-alta',
  templateUrl: 'alta.html'
})
export class AltaPage {   
  //persona: {id: string ;nombre: string, apellido: string, dni: string};
  persona={};
  personaAlta : FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire, public modalCtrl: ModalController) {
    this.personaAlta = af.database.list('/personas');    
   }

  agregar(){
    this.personaAlta.push(this.persona)
      .then(_ => alert('EXITO!!'))
      .catch(err => alert('ERROR al agregar: ' + err));  
  }

  openModal() {
    let mensaje = {mensaje: 'ALTA'};
    let myModal = this.modalCtrl.create(ModalPage,mensaje);
    myModal.present();
  }
  
}