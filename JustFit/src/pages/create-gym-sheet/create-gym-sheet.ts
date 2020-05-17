import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { CategoryHttpRepository } from '../../repositories/category/category.http.repository';
import { CategoryApiModel } from '../../models/category.api.model';
import { AlertProvider } from '../../providers/alert/alert.provider';

@IonicPage()
@Component({
  selector: 'page-create-gym-sheet',
  templateUrl: 'create-gym-sheet.html',
})

export class CreateGymSheetPage {

  exerciseCategories: CategoryApiModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loaderProvider: LoaderProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly categoryHttpRepository: CategoryHttpRepository,
    private readonly alertProvider: AlertProvider
  ) { }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    try {
      this.exerciseCategories = await this.categoryHttpRepository.retrieveExercisesCategories().toPromise();
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

}
