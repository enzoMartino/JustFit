import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryApiModel } from '../../models/category.api.model';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { CategoryProvider } from '../../providers/category/category.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-exercises-categories',
  templateUrl: 'exercises-categories.html',
})
export class ExercisesCategoriesPage {

  private dayOfWeek: string;

  exerciseCategories: CategoryApiModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loaderProvider: LoaderProvider,
    private readonly categoryProvider: CategoryProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.dayOfWeek = this.navParams.data.dayOfWeek;
  }

  ionViewDidLoad() {
    this.retrieveExercisesCategoriesWithImages();
  }

  async retrieveExercisesCategoriesWithImages() {
    //TODO: MOVE LOADER IN THE HTTP INTERCEPTOR
    this.loaderProvider.showLoader();
    try {
      this.exerciseCategories = await this.categoryProvider.retrieveExercisesCategoriesWithImages();
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    this.loaderProvider.hideLoader();
  }

  onExerciseCategoryCardClicked(exerciseCategory: CategoryApiModel) {
    this.navCtrl.push(EnumNavigationMain.ExerciseCategoryDetailPage,
      { exerciseCategory, dayOfWeek: this.dayOfWeek });
  }

  onViewGymSheetButtonClicked() {
    this.navCtrl.popTo(this.navCtrl.getViews().find(x => x.id === EnumNavigationMain.CreateGymSheetPage));
  }

}
