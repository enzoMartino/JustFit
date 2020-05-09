import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

  private loader: Loading;

  constructor(
    private readonly loadingCtrl: LoadingController
  ) { }

  async showLoader() {
    this.loader = this.loadingCtrl.create({
      spinner: "crescent"
    });
    await this.loader.present();
  }

  async hideLoader() {
    if (this.loader !== undefined) {
      await this.loader.dismiss();
    }
  }

}
