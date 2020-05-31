import { Observable } from "rxjs";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";

export interface IExerciseCommentRepository {
    retrieveExerciseCommentByExerciseId(id: number)
        : Observable<GenericApiResponseModel<ExerciseCommentApiModel>>;
}