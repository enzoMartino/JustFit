import { ExerciseFirebaseModel } from "./exercise.firebase.model";

export class GymSheetModel {
    id: string;
    exercisesList: Map<string, Map<number, ExerciseFirebaseModel>>;
}