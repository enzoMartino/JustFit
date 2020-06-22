import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content } from 'ionic-angular';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { ExerciseProvider } from '../../providers/exercise/exercise.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { LoaderProvider } from '../../providers/loader/loader.provider';
import { MuscleApiModel } from '../../models/muscle.api.model';
import { EquipmentApiModel } from '../../models/equipment.api.model';
import { GymSheetCreatorProvider } from '../../providers/gym-sheet-creator/gym-sheet-creator.provider';
import { ExerciseFirebaseModel } from '../../models/exercise.firebase.model';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  @ViewChild(Content) content: Content;

  private dayOfWeek: string;

  exerciseFirebase: ExerciseFirebaseModel;
  exercise: ExerciseApiModel;
  exerciseMuscles: MuscleApiModel[];
  exerciseEquipments: EquipmentApiModel[];
  rest: number;
  reps: number;
  sets: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private readonly loaderProvider: LoaderProvider,
    private readonly exerciseProvider: ExerciseProvider,
    private readonly alertProvider: AlertProvider,
    private readonly gymSheetCreatorProvider: GymSheetCreatorProvider
  ) {
    this.exercise = this.navParams.data.exercise;
    this.dayOfWeek = this.navParams.data.dayOfWeek;
    this.exerciseFirebase = this.gymSheetCreatorProvider
      .getExercise(this.dayOfWeek, this.exercise.id);
    this.rest = this.exerciseFirebase ? this.exerciseFirebase.rest : 0;
    this.reps = this.exerciseFirebase ? this.exerciseFirebase.reps : 1;
    this.sets = this.exerciseFirebase ? this.exerciseFirebase.sets : 1;
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

  onAddButtonClicked() {
    this.exerciseFirebase = this.gymSheetCreatorProvider
      .addExerciseToGymSheet(this.dayOfWeek, this.sets, this.reps,
        this.rest, this.exercise.id);
    this.exercise.isAdded = true;
    this.content.resize();
  }

  onCloseButtonClicked() {
    this.viewCtrl.dismiss();
  }

  onEditButtonClicked() {
    this.exerciseFirebase = this.gymSheetCreatorProvider
      .addExerciseToGymSheet(this.dayOfWeek, this.sets, this.reps,
        this.rest, this.exercise.id);
  }

  onRemoveButtonClicked() {
    this.gymSheetCreatorProvider
      .removeExerciseFromGymSheet(this.dayOfWeek, this.exercise.id);
    this.exerciseFirebase = undefined;
    this.exercise.isAdded = false;
    this.content.resize();
  }

  increaseReps() { this.reps++; }

  increaseSets() { this.sets++; }

  increaseRest() { this.rest += 5; }

  decreaseReps() { if (this.reps > 1) { this.reps--; } }

  decreaseSets() { if (this.sets > 1) { this.sets--; } }

  decreaseRest() { if (this.rest > 0) { this.rest -= 5; } }

  isEditButtonDisabled() {
    return this.exerciseFirebase &&
      this.exerciseFirebase.reps === this.reps &&
      this.exerciseFirebase.rest === this.rest &&
      this.exerciseFirebase.sets === this.sets;
  }

}
