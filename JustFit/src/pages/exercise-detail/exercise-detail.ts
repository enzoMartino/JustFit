import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { MuscleApiModel } from '../../models/muscle.api.model';
import { EquipmentApiModel } from '../../models/equipment.api.model';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  exercise: ExerciseApiModel;
  exerciseMuscles: MuscleApiModel[];
  exerciseEquipments: EquipmentApiModel[];

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
      this.exerciseEquipments = await this.exerciseProvider
        .retrieveExerciseEquipmentsByIds(this.exercise.equipment);
      this.exerciseMuscles = await this.exerciseProvider
        .retrieveExerciseMusclesByIds(this.exercise.muscles.concat(this.exercise.muscles_secondary));
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
    await this.loaderProvider.hideLoader();
  }

}
