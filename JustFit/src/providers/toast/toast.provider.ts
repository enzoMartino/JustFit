import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  private readonly toastDuration = 3000;
  private readonly toastPosition = "bottom";

  constructor(
    private readonly toastCtrl: ToastController
  ) { }

  presentInfoToast(message: string, duration = this.toastDuration, position = this.toastPosition) {
    this.toastCtrl.create({
      message,
      duration,
      position,
      closeButtonText: "Ok"
    }).present();
  }

}
