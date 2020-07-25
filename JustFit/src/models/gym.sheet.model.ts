import { ExerciseFirebaseModel } from "./exercise.firebase.model";

export class GymSheetModel {
    exercisesList: Map<string, Map<number, ExerciseFirebaseModel>>;
}