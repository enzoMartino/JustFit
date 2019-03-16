import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider/auth-provider'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private readonly navCtrl: NavController,
    private readonly navParams: NavParams,
    private readonly AuthProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    this.AuthProvider.ui.start('#firebaseui-auth-container', AuthProvider.getUiConfig());
  }

}
