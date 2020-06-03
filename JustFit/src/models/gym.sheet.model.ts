import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";
import { ExerciseFirebaseModel } from "./exercise.firebase.model";

export class GymSheetModel extends BaseFirebaseCollectionModel {
    exercisesList: Map<string, Map<number, ExerciseFirebaseModel>>;
}