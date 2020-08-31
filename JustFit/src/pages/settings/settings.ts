import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertButton } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings.provider';
import { SettingButtonModel } from '../../models/setting.button.model';
import { SettingsButtonsEnum } from '../../models/enum.settings.buttons';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { SessionProvider } from '../../providers/session/session.provider';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { PersonalTrainerFirebaseRepository } from '../../repositories/personal.trainer/personal.trainer.firebase.repository';
import { ReviewFirebaseRepository } from '../../repositories/review/review.firebase.repository';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  settingsList: SettingButtonModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly settingsProvider: SettingsProvider,
    private readonly alertProvider: AlertProvider,
    private readonly loaderProvider: LoaderProvider,
    private readonly sessionProvider: SessionProvider,
    private readonly authProvider: AuthProvider,
    private readonly personalTrainerFirebaseRepository: PersonalTrainerFirebaseRepository,
    private readonly reviewFirebaseRepository: ReviewFirebaseRepository
  ) {
    this.settingsList = this.settingsProvider.getSettingsList();
  }

  async onSettingButtonClicked(setting: SettingButtonModel) {
    switch (setting.id) {
      case SettingsButtonsEnum.CHANGE_YOUR_PROFILE_DATA_BUTTON:
        break;
      case SettingsButtonsEnum.DELETE_YOUR_ACCOUNT_BUTTON:
        await this.handleDeleteAccount();
        break;
      case SettingsButtonsEnum.OPEN_SOURCE_RESOURCES_BUTTON:
        break;
      default:
        break;
    }
  }

  private async handleDeleteAccount() {
    const buttons: AlertButton[] = [{
      text: "OK",
      handler: () => {
        this.loaderProvider.showLoader();
        this.authProvider.logout();
        this.loaderProvider.hideLoader();
      }
    }];
    await this.loaderProvider.showLoader();
    try {
      await this.personalTrainerFirebaseRepository
        .deletePersonalTrainerById(this.sessionProvider.loggedPersonaltrainer.id);
      await this.reviewFirebaseRepository
        .deleteReviewsByPersonalTrainerById(this.sessionProvider.loggedPersonaltrainer.id);
      await this.sessionProvider.firebaseUser.delete();
      this.alertProvider.presentInfoAlert("Your account has been deleted. You will be redirected to the login page.", buttons);
    }
    catch (error) {
      this.alertProvider.presentErrorAlert(error);
    } finally {
      await this.loaderProvider.hideLoader();
    }
  }

}
