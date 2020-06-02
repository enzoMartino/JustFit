import { Observable } from "rxjs";
import { MuscleApiModel } from "../../models/muscle.api.model";

export interface IMuscleRepository {
    retrieveMuscleById(id: number)
        : Observable<MuscleApiModel>;
}