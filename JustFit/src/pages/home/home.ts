import { Component } from '@angular/core';
import { NavController, IonicPage, AlertButton } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session.provider';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ClientModel } from '../../models/client.model';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { AlertProvider } from '../../providers/alert/alert.provider';

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
    private readonly clientFirebaseRepository: ClientFirebaseRepository,
    private readonly alertProvider: AlertProvider
  ) {
    this.user = this.sessionProvider.loggedPersonaltrainer;
  }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    try {
      this.clientsList = await this.clientFirebaseRepository
        .getClientsByPersonalTrainerId(this.sessionProvider.loggedPersonaltrainer.id);
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    } finally {
      await this.loaderProvider.hideLoader();
    }
  }

  onCreateGymSheetButtonClicked(client: ClientModel) {
    this.navCtrl.push(EnumNavigationMain.CreateGymSheetPage, { client });
  }

  onEditGymSheetButtonClicked(client: ClientModel) {
    this.navCtrl.push(EnumNavigationMain.CreateGymSheetPage, { client });
  }

  onContactButtonClicked(client: ClientModel) {
    if (client.phone !== undefined && (client.email !== "" && client.email !== undefined)) {
      const buttons: AlertButton[] = [{
        text: "Phone",
        cssClass: "bold",
        handler: () => {
          document.location.href = "tel:" + client.phone.toString();
        }
      },
      {
        text: "Email",
        handler: () => {
          document.location.href = "mailto:" + client.email.toString();
        }
      }];
      this.alertProvider.presentInfoAlert("Select how to contact your client", buttons);
    } else if (client.phone === undefined && (client.email !== "" && client.email !== undefined)) {
      document.location.href = "mailto:" + client.email.toString();
    } else if (client.phone !== undefined && (client.email === "" || client.email === undefined)) {
      document.location.href = "tel:" + client.phone.toString();
    }
  }

}