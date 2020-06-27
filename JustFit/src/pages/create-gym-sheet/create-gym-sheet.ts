import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { GymSheetCreatorProvider } from '../../providers/gym-sheet-creator/gym-sheet-creator.provider';

@IonicPage()
@Component({
  selector: 'page-create-gym-sheet',
  templateUrl: 'create-gym-sheet.html',
})

export class CreateGymSheetPage {

  readonly daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly gymSheetCreatorProvider: GymSheetCreatorProvider
  ) { }

  onDayOfWeekClicked(dayOfWeek: string) {
    this.navCtrl.push(EnumNavigationMain.DayOfWeekDetailPage, { dayOfWeek });
  }

  onSaveGymSheetButtonClicked() {

  }

}
