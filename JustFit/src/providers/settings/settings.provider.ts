import { Injectable } from '@angular/core';
import { SettingButtonModel } from '../../models/setting.button.model';
import { SettingsButtonsEnum } from '../../models/enum.settings.buttons';
import { SettingButtonCssClassesEnum } from '../../models/enum.setting.button.css.classes';
import { SessionProvider } from '../session/session.provider';
import { ProvidersIdsEnum } from '../../models/enum.providers.ids';

@Injectable()
export class SettingsProvider {

  private readonly SETTINGS_LIST: SettingButtonModel[];

  constructor(
    private readonly sessionProvider: SessionProvider
  ) {
    this.SETTINGS_LIST = this.initSettingsList();
  }

  private initSettingsList() {
    const settingsList: SettingButtonModel[] = [];
    try {
      if (this.sessionProvider.firebaseUser.providerData[0].providerId !== ProvidersIdsEnum.google) {
        settingsList.push(new SettingButtonModel(SettingsButtonsEnum.CHANGE_YOUR_PROFILE_DATA_BUTTON,
          "Change your profile data", SettingButtonCssClassesEnum.bold__black_color__font_size_m));
      }
    } catch (error) {

    }
    settingsList.push(new SettingButtonModel(SettingsButtonsEnum.OPEN_SOURCE_RESOURCES_BUTTON,
      "Open source resources", SettingButtonCssClassesEnum.bold__black_color__font_size_m));
    settingsList.push(new SettingButtonModel(SettingsButtonsEnum.DELETE_YOUR_ACCOUNT_BUTTON,
      "Delete your account", SettingButtonCssClassesEnum.bold__red_color__font_size_m));
    return settingsList;
  }

  getSettingsList(): SettingButtonModel[] {
    return this.SETTINGS_LIST;
  }

}
