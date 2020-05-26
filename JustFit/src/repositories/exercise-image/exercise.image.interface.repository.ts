import { Observable } from "rxjs";
import { ExerciseImageApiModel } from "../../models/exercise.image.api.model";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";

export interface IExerciseImageRepository {
    retrieveExerciseImageByExerciseId(id: number): Observable<GenericApiResponseModel<ExerciseImageApiModel>>;
}