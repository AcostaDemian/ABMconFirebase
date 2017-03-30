import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-alta',
  templateUrl: 'alta.html'
})
export class AltaPage { 
  //persona: {id: string ;nombre: string, apellido: string, dni: string};
  persona= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaPage');
  }

  agregar(){
   /* this.http
             .post(url, JSON.stringify(hero), {headers: headers})
             .map(res => res.json());*/
    //console.log(this.persona);
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = this.persona;
    return this.http.post('http://acostademianariel.esy.es/PPS2017/index.php/persona/guardar/', body, options).map((res: Response) => res.json());
  }

}