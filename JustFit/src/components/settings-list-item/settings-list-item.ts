import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SettingButtonModel } from '../../models/setting.button.model';

@Component({
  selector: 'settings-list-item',
  templateUrl: 'settings-list-item.html'
})

export class SettingsListItemComponent {

  @Input() setting: SettingButtonModel

  @Output() settingButtonClicked: EventEmitter<SettingButtonModel>;

  constructor() {
    this.settingButtonClicked = new EventEmitter();
  }

  onSettingButtonClicked() {
    this.settingButtonClicked.emit(this.setting);
  }

}
