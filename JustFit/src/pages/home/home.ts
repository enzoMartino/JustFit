import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session.provider';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ClientModel } from '../../models/client.model';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: PersonalTrainerModel;
  clientsList: ClientModel[] = [];

  constructor(
    public navCtrl: NavController,
    private readonly sessionProvider: SessionProvider,
    private readonly loaderProvider: LoaderProvider,
    private readonly clientFirebaseRepository: ClientFirebaseRepository
  ) {
    this.user = this.sessionProvider.loggedPersonaltrainer;
  }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    this.clientsList = await this.clientFirebaseRepository
      .getClientsByPersonalTrainerId(this.sessionProvider.loggedPersonaltrainer.id);
    await this.loaderProvider.hideLoader();
  }

  onCreateGymSheetButtonClicked(client: ClientModel) {
    this.navCtrl.push(EnumNavigationMain.CreateGymSheetPage, { client });
  }

  onEditGymSheetButtonClicked(client: ClientModel) {
    this.navCtrl.push(EnumNavigationMain.CreateGymSheetPage, { client });
  }

}