import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  items: FirebaseListObservable<any[]>;
  //personas: Array<{id: string ;nombre: string, apellido: string, dni: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,af: AngularFire) {
    //this.personas = [{"id":1,"nombre":"Demian","apellido":"Acosta","dni":1414},{"id":2,"nombre":"Joa","apellido":"Quin","dni":5690}];
    /*this.http.get('http://acostademianariel.esy.es/PPS2017/index.php/personas').map(res => res.json()).subscribe(data => {
      console.log(data);   
      this.personas = data;
    });*/
    this.items = af.database.list('/personas');
    this.items.subscribe(items => {
    // items is an array
    items.forEach(item => {
        console.log('Item:', item);
      });
    });
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
