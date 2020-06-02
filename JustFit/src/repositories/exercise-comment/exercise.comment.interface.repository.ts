import { Observable } from "rxjs";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";

export interface IExerciseCommentRepository {
    retrieveExerciseCommentByExerciseId(id: number)
        : Observable<GenericMultipleApiResponseModel<ExerciseCommentApiModel>>;
}