import { Observable } from "rxjs";
import { ExerciseApiModel } from "../../models/exercise.api.model";

export interface IExerciseRepository {
    retrieveExercises(): Observable<ExerciseApiModel[]>;
}