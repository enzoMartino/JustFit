import { Injectable } from '@angular/core';
import { GymSheetModel } from '../../models/gym.sheet.model';
import { ExerciseFirebaseModel } from '../../models/exercise.firebase.model';
import { ToastProvider } from '../toast/toast.provider';
import { EnumWeekDays } from '../../models/enum.week-days';
import { Subject } from 'rxjs';

@Injectable()
export class GymSheetCreatorProvider {

  private gymSheet: GymSheetModel;
  public readonly onGymSheetChange: Subject<boolean>;

  constructor(
    private readonly toastProvider: ToastProvider
  ) {
    this.onGymSheetChange = new Subject();
  }

  initGymSheet(gymSheet: GymSheetModel) {
    if (gymSheet) {
      this.gymSheet = gymSheet;
    } else {
      this.initGymSheetDaysOfWeek();
    }
  }

  private initGymSheetDaysOfWeek() {
    this.gymSheet = new GymSheetModel();
    this.gymSheet.exercisesList = new Map();
    this.gymSheet.exercisesList.set(EnumWeekDays.Monday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Tuesday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Wednesday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Thursday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Friday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Saturday, new Map());
    this.gymSheet.exercisesList.set(EnumWeekDays.Sunday, new Map());
  }

  addExerciseToGymSheet(dayOfWeek: string, sets: number, reps: number, rest: number, exerciseId: number) {
    const dayExercisesMap = this.gymSheet.exercisesList.get(dayOfWeek);
    const exercise = new ExerciseFirebaseModel(sets, reps, rest, exerciseId);
    const isExerciseExisting = this.isExerciseExisting(dayOfWeek, exerciseId);
    dayExercisesMap.set(exerciseId, exercise);
    isExerciseExisting ?
      this.toastProvider.presentInfoToast("Exercise has been updated") :
      this.toastProvider.presentInfoToast("Exercise has been added");
    this.onGymSheetChange.next(true);
    return exercise;
  }

  removeExerciseFromGymSheet(dayOfWeek: string, exerciseId: number) {
    const dayExercisesMap = this.gymSheet.exercisesList.get(dayOfWeek);
    dayExercisesMap.delete(exerciseId);
    this.toastProvider.presentInfoToast("Exercise has been removed");
    this.onGymSheetChange.next(true);
  }

  clearGymSheet() {
    this.gymSheet.exercisesList.clear();
    this.initGymSheetDaysOfWeek();
    this.toastProvider.presentInfoToast("Gym sheet has been cleared");
    this.onGymSheetChange.next(true);
  }

  getGymSheet() {
    return this.gymSheet;
  }

  getExercise(dayOfWeek: string, exerciseId: number) {
    const dayExercisesMap = this.gymSheet.exercisesList.get(dayOfWeek);
    return dayExercisesMap.get(exerciseId);
  }

  isExerciseExisting(dayOfWeek: string, exerciseId: number) {
    const dayExercisesMap = this.gymSheet.exercisesList.get(dayOfWeek);
    return dayExercisesMap.get(exerciseId) !== undefined;
  }

  clearDayOfWeekMap(dayOfWeek: string) {
    const dayExercisesMap = this.gymSheet.exercisesList.get(dayOfWeek);
    dayExercisesMap.clear();
    this.toastProvider.presentInfoToast(`All exercises for ${dayOfWeek} has been removed`);
    this.onGymSheetChange.next(true);
  }

  getDayOfWeekMap(dayOfWeek: string) {
    return this.gymSheet.exercisesList.get(dayOfWeek);
  }

}
