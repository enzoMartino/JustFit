import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { CategoryApiModel } from '../../models/category.api.model';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { CategoryProvider } from '../../providers/category/category.provider';

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
    private readonly categoryProvider: CategoryProvider,
    private readonly alertProvider: AlertProvider
  ) { }

  async ionViewDidLoad() {
    await this.loaderProvider.showLoader();
    try {
      const start = Date.now();
      this.exerciseCategories = await this.categoryProvider.retrieveExercisesCategoriesWithImages();
      console.log("Timer ended " + ((Date.now() - start)/1000));
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

}
