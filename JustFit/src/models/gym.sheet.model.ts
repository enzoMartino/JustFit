import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";
import { ExerciseModel } from "./exercise.model";

export class GymSheetModel extends BaseFirebaseCollectionModel {
    exercisesList: ExerciseModel[] = [];
}