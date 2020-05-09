import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewModel } from '../../models/review.model';
import { ReviewFirebaseRepository } from '../../repositories/review/review.firebase.repository';
import { SessionProvider } from '../../providers/session/session.provider';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  readonly pageTitle = "Profile";
  readonly shrinkingHeaderHeight = 150;
  reviewsList: ReviewModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly sessionProvider: SessionProvider,
    private readonly reviewFirebaseRepository: ReviewFirebaseRepository
  ) { }

  async ionViewDidEnter() {
    this.reviewsList = await this.reviewFirebaseRepository
      .getReviewsByUserId(this.sessionProvider.loggedPersonaltrainer.id);
  }

}
