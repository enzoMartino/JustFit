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

  presentAddingExerciseAlert() {
    const alert = this.alertCtrl.create({
      title: "Add exercise",
      inputs: [{
        name: "sets",
        type: "number",
        label: "Sets",
        min: 1,
        placeholder: "Sets"
      },
      {
        name: "reps",
        type: "number",
        label: "Reps",
        min: 1,
        placeholder: "Reps"
      }, {
        name: "rest",
        type: "number",
        label: "Rest",
        min: 0,
        placeholder: "Rest (in seconds)"
      }],
      buttons: [
        "Cancel",
        {
          text: "Add",
          handler: data => { }
        }
      ]
    });
    alert.present();
    return alert;
  }

}
