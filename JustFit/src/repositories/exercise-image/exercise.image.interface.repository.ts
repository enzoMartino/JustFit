import { Observable } from "rxjs";
import { ExerciseImageApiModel } from "../../models/exercise.image.api.model";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

export interface IExerciseImageRepository {
    retrieveExerciseImageByExerciseId(id: number): Observable<GenericMultipleApiResponseModel<ExerciseImageApiModel>>;
}