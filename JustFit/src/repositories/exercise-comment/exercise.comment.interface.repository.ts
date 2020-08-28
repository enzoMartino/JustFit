import { Observable } from "rxjs";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

export interface IExerciseCommentRepository {
    retrieveExerciseCommentByExerciseId(id: number)
        : Observable<GenericMultipleApiResponseModel<ExerciseCommentApiModel>>;
}