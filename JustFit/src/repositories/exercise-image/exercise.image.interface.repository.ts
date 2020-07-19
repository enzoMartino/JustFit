import { Observable } from "rxjs";
import { ExerciseImageApiModel } from "../../models/exercise.image.api.model";

export interface IExerciseImageRepository {
    retrieveExerciseImageByExerciseId(id: number): Observable<Array<ExerciseImageApiModel>>;
}