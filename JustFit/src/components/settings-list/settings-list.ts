import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SettingButtonModel } from '../../models/setting.button.model';

@Component({
  selector: 'settings-list',
  templateUrl: 'settings-list.html'
})

export class SettingsListComponent {

  @Input() settingsList: SettingButtonModel[];

  @Output() settingButtonClicked: EventEmitter<SettingButtonModel>;

  constructor() {
    this.settingButtonClicked = new EventEmitter();
  }

  onSettingButtonClicked(setting: SettingButtonModel) {
    this.settingButtonClicked.emit(setting);
  }

}
