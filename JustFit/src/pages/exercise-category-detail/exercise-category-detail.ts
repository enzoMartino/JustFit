import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { CategoryApiModel } from '../../models/category.api.model';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-exercise-category-detail',
  templateUrl: 'exercise-category-detail.html',
})
export class ExerciseCategoryDetailPage {

  private exerciseCategory: CategoryApiModel;
  private page: number;
  private hasMoreExercises: boolean;

  exercisesList: ExerciseApiModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loaderProvider: LoaderProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.exercisesList = [];
    this.page = 0;
    this.hasMoreExercises = true;
    this.exerciseCategory = this.navParams.data.exerciseCategory;
  }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    await this.retrieveCategoryExercises();
    await this.loaderProvider.hideLoader();
  }

  async retrieveCategoryExercises() {
    if (this.hasMoreExercises) {
      try {
        const response = await this.exerciseProvider
          .retrieveExercisesByCategoryIdWithImages(this.exerciseCategory.id, ++this.page);
        this.hasMoreExercises = response.next !== null;
        this.exercisesList.push(...response.results);
      } catch (error) {
        this.alertProvider.presentErrorAlert(error);
      }
    }
  }

  onAddButtonClicked(exercise: ExerciseApiModel) {

  }

  onViewButtonClicked(exercise: ExerciseApiModel) {
    this.navCtrl.push(EnumNavigationMain.ExerciseDetailPage, { exercise });
  }

}
