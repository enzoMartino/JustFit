import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

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
}
