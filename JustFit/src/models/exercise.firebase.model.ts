import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";

export class ExerciseFirebaseModel extends BaseFirebaseCollectionModel {
    sets: number;
    reps: number;
    rest: number;
}