import { Observable } from "rxjs";
import { ExerciseApiModel } from "../../models/exercise.api.model";

export interface IExerciseRepository {
    retrieveExercises(page: number): Observable<ExerciseApiModel[]>;
    retrieveExercisesByCategoryId(id: number, page: number): Observable<Array<ExerciseApiModel>>;
    retrieveExerciseById(id: number): Observable<ExerciseApiModel>;
}