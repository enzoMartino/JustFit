import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

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
    public navParams: NavParams
  ) { }

  onDayOfWeekClicked(dayOfWeek: string) {
    this.navCtrl.push(EnumNavigationMain.DayOfWeekDetailPage, { dayOfWeek });
  }

}
