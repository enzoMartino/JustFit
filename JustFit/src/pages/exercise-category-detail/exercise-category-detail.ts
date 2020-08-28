import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  private dayOfWeek: string;

  exercisesList: ExerciseApiModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private readonly loaderProvider: LoaderProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.exercisesList = [];
    this.page = 0;
    this.exerciseCategory = this.navParams.data.exerciseCategory;
    this.dayOfWeek = this.navParams.data.dayOfWeek;
  }

  ionViewDidEnter() {
    this.retrieveCategoryExercises();
  }

  async retrieveCategoryExercises() {
    await this.loaderProvider.showLoader();
    try {
      const response = await this.exerciseProvider
        .retrieveExercisesByCategoryIdWithImages(this.exerciseCategory.id, ++this.page);
      this.exercisesList.push(...response.results);
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

  onExerciseClicked(index: number) {
    this.modalCtrl.create(EnumNavigationMain.ExerciseDetailPage,
      { exercise: this.exercisesList[index], dayOfWeek: this.dayOfWeek }).present();
  }

  onViewGymSheetButtonClicked() {
    this.navCtrl.popTo(this.navCtrl.getViews().find(x => x.id === EnumNavigationMain.CreateGymSheetPage));
  }

}
