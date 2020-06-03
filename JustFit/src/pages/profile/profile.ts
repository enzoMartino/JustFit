import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewModel } from '../../models/review.model';
import { ReviewFirebaseRepository } from '../../repositories/review/review.firebase.repository';
import { SessionProvider } from '../../providers/session/session.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  readonly pageTitle = "Profile";
  readonly shrinkingHeaderHeight = 200;

  personalTrainer: PersonalTrainerModel;
  reviewsList: ReviewModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly sessionProvider: SessionProvider,
    private readonly reviewFirebaseRepository: ReviewFirebaseRepository,
    private readonly loaderProvider: LoaderProvider
  ) {
    this.personalTrainer = this.sessionProvider.loggedPersonaltrainer;
  }

  async ionViewDidEnter() {
    await this.loaderProvider.showLoader();
    this.reviewsList = await this.reviewFirebaseRepository
      .getReviewsByUserId(this.sessionProvider.loggedPersonaltrainer.id);
    await this.loaderProvider.hideLoader();
  }

}
