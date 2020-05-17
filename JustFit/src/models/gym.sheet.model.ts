import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";
import { ExerciseFirebaseModel } from "./exercise.firebase.model";
import { EnumWeekDays } from "./enum.week-days";

export class GymSheetModel extends BaseFirebaseCollectionModel {
    exercisesList: Map<EnumWeekDays, ExerciseFirebaseModel[]>;
}