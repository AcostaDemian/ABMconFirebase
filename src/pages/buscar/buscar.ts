import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {
  myModel: any;
  persona: {id: string ;nombre: string, apellido: string, dni: string};
  //persona: Array<{id: string ;nombre: string, apellido: string, dni: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.persona = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  buscar(myModel) {
    this.http.get('http://acostademianariel.esy.es/PPS2017/index.php/persona?id='+ this.myModel).map(res => res.json()).subscribe(data => {  
        this.persona = data;
    });
    console.log(myModel);    
  }  

}
