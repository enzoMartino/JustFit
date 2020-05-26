import { Observable } from "rxjs";
import { ExerciseApiModel } from "../../models/exercise.api.model";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";

export interface IExerciseRepository {
    retrieveExercises(page: number): Observable<ExerciseApiModel[]>;
    retrieveExercisesByCategoryId(id: number, page: number): Observable<GenericApiResponseModel<ExerciseApiModel>>;
}