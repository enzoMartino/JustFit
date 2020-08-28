import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session.provider';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: PersonalTrainerModel;

  constructor(
    public navCtrl: NavController,
    private readonly sessionProvider: SessionProvider
  ) {
    this.user = this.sessionProvider.loggedPersonaltrainer;
  }


}