import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modificacion',
  templateUrl: 'modificacion.html'
})
export class ModificacionPage {
  persona={};


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificacionPage');
  }

  modificar(){

  }

}
