import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-day-of-week-detail',
  templateUrl: 'day-of-week-detail.html',
})
export class DayOfWeekDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidEnter() { }

}
