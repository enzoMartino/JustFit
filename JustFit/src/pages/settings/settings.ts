import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings.provider';
import { SettingButtonModel } from '../../models/setting.button.model';
import { SettingsButtonsEnum } from '../../models/enum.settings.buttons';

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
    private readonly settingsProvider: SettingsProvider
  ) {
    this.settingsList = this.settingsProvider.getSettingsList();
  }

  onSettingButtonClicked(setting: SettingButtonModel) {
    switch (setting.id) {
      case SettingsButtonsEnum.CHANGE_YOUR_PROFILE_DATA_BUTTON:
        break;
      case SettingsButtonsEnum.DELETE_YOUR_ACCOUNT_BUTTON:
        break;
      case SettingsButtonsEnum.OPEN_SOURCE_RESOURCES_BUTTON:
        break;
      default:
        break;
    }
  }

}
