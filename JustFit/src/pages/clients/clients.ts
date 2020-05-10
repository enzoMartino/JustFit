import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  pageTitle = "Clients";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
