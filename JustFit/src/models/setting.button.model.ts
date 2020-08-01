import { SettingButtonCssClassesEnum } from "./enum.setting.button.css.classes";
import { SettingsButtonsEnum } from "./enum.settings.buttons";

export class SettingButtonModel {

    id: SettingsButtonsEnum;
    text: string;
    cssClass: SettingButtonCssClassesEnum

    constructor(id: SettingsButtonsEnum, text?: string, cssClass?: SettingButtonCssClassesEnum) {
        this.text = text;
        this.cssClass = cssClass;
        this.id = id;
    }

}