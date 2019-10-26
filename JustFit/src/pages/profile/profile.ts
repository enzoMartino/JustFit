import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewModel } from '../../models/review.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  readonly pageTitle = "Profile";
  readonly shrinkingHeaderHeight = 150;
  reviewsList: ReviewModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
