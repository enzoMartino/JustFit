import { Injectable } from '@angular/core';
import { AlertController, AlertButton } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(
    private readonly alertCtrl: AlertController
  ) { }

  presentErrorAlert(message: string) {
    this.alertCtrl.create({
      title: "Error",
      subTitle: message,
      buttons: ["OK"]
    }).present();
  }

  presentWarningAlert(message: string, buttons: AlertButton[]) {
    this.alertCtrl.create({
      title: "Warning",
      subTitle: message,
      buttons: buttons
    }).present();
  }

  presentInfoAlert(message: string, buttons: AlertButton[]) {
    this.alertCtrl.create({
      title: "Info",
      subTitle: message,
      buttons: buttons
    }).present();
  }

}
