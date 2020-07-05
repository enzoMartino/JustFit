import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientModel } from '../../models/client.model';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { SessionProvider } from '../../providers/session/session.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  readonly pageTitle = "Clients";

  clientsList: ClientModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loaderProvider: LoaderProvider,
    private readonly clientFirebaseRepository: ClientFirebaseRepository,
    private readonly sessionProvider: SessionProvider
  ) {
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

}
