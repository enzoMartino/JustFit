import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { GymSheetCreatorProvider } from '../../providers/gym-sheet-creator/gym-sheet-creator.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { ModalProvider } from '../../providers/modal/modal.provider';

@IonicPage()
@Component({
  selector: 'page-day-of-week-detail',
  templateUrl: 'day-of-week-detail.html',
})
export class DayOfWeekDetailPage {

  private dayOfWeek: string;

  exercisesList: ExerciseApiModel[];
  isLoadingData: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly gymSheetCreatorProvider: GymSheetCreatorProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly loaderProvider: LoaderProvider,
    private readonly alertProvider: AlertProvider,
    private readonly modalProvider: ModalProvider
  ) {
    this.dayOfWeek = this.navParams.data.dayOfWeek;
    this.isLoadingData = true;
    this.exercisesList = [];
  }

  ionViewDidEnter() {
    this.retrieveExercisesByIds(
      Array.from(new Set(this.gymSheetCreatorProvider.getDayOfWeekMap(this.dayOfWeek).keys())));
  }

  async retrieveExercisesByIds(ids: number[]) {
    this.isLoadingData = true;
    await this.loaderProvider.showLoader();
    try {
      const exercisesList = await this.exerciseProvider.retrieveExercisesByIds(ids);
      exercisesList.forEach(x => x.isAdded = true);
      this.exercisesList = exercisesList;
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
    this.isLoadingData = false;
  }

  onAddExerciseButtonClicked() {
    this.navCtrl.push(EnumNavigationMain.ExercisesCategoriesPage, { dayOfWeek: this.dayOfWeek });
  }

  onExerciseClicked(index: number) {
    this.modalProvider.showModal(
      EnumNavigationMain.ExerciseDetailPage,
      { exercise: this.exercisesList[index], dayOfWeek: this.dayOfWeek },
      () => {
        this.retrieveExercisesByIds(
          Array.from(new Set(this.gymSheetCreatorProvider.getDayOfWeekMap(this.dayOfWeek).keys())));
      }
    )
  }

}
