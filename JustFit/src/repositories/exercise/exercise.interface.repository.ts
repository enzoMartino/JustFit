import { Observable } from "rxjs";
import { ExerciseApiModel } from "../../models/exercise.api.model";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

export interface IExerciseRepository {
    retrieveExercises(page: number): Observable<ExerciseApiModel[]>;
    retrieveExercisesByCategoryId(id: number, page: number): Observable<GenericMultipleApiResponseModel<ExerciseApiModel>>;
}