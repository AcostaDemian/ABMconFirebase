import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-baja',
  templateUrl: 'baja.html'
})
export class BajaPage {
  persona={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BajaPage');
  }

  borrar(){
    
  }

}
