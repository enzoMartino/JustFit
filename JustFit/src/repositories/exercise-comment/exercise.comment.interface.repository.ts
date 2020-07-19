import { Observable } from "rxjs";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";

export interface IExerciseCommentRepository {
    retrieveExerciseCommentByExerciseId(id: number)
        : Observable<Array<ExerciseCommentApiModel>>;
}