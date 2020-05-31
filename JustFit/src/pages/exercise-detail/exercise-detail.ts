import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  exercise: ExerciseApiModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loaderProvider: LoaderProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.exercise = this.navParams.data.exercise;
  }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    try {
      this.exercise.comment = await this.exerciseProvider
        .retrieveExerciseCommentByExerciseId(this.exercise.id);
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

}
