import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from 'ionic-angular';

@Injectable()
export class ModalProvider {

  constructor(
    public modalCtrl: ModalController
  ) { }

  showModal(
    page: string,
    data?: any,
    onWillDismissCallback?: Function,
    options?: ModalOptions
  ) {
    const modal = this.modalCtrl.create(page, data, options);
    modal.onWillDismiss(onWillDismissCallback);
    modal.present();
  }

}
