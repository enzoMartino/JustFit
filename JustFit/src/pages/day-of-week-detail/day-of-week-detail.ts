import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryApiModel } from '../../models/category.api.model';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { GymSheetCreatorProvider } from '../../providers/gym-sheet-creator/gym-sheet-creator.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';

@IonicPage()
@Component({
  selector: 'page-day-of-week-detail',
  templateUrl: 'day-of-week-detail.html',
})
export class DayOfWeekDetailPage {

  private exerciseCategory: CategoryApiModel;
  private page: number;
  private hasMoreExercises: boolean;
  private dayOfWeek: string;

  exercisesList: ExerciseApiModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly gymSheetCreatorProvider: GymSheetCreatorProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly loaderProvider: LoaderProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.dayOfWeek = this.navParams.data.dayOfWeek;
  }

  ionViewDidEnter() {
    this.retrieveExercisesByIds(
      Array.from(new Set(this.gymSheetCreatorProvider.getDayOfWeekMap(this.dayOfWeek).keys())));
  }

  async retrieveExercisesByIds(ids: number[]) {
    await this.loaderProvider.showLoader();
    try {
      this.exercisesList = await this.exerciseProvider.retrieveExercisesByIds(ids);
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

  onAddExerciseButtonClicked() {
    this.navCtrl.push(EnumNavigationMain.ExercisesCategoriesPage, { dayOfWeek: this.dayOfWeek });
  }

}
