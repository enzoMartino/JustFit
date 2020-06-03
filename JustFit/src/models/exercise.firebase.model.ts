import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";

export class ExerciseFirebaseModel extends BaseFirebaseCollectionModel {
    sets: number;
    reps: number;
    rest: number;
    exerciseId: number;

    constructor(sets: number, reps: number, rest: number, exerciseId: number, id?: string) {
        super(id);
        this.sets = sets;
        this.reps = reps;
        this.rest = rest;
        this.exerciseId = exerciseId;
    }
}