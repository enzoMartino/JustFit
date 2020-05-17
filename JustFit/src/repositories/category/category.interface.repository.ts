import { Observable } from "rxjs";
import { CategoryApiModel } from "../../models/category.api.model";

export interface ICategoryRepository {
    retrieveExercisesCategories(): Observable<CategoryApiModel[]>;
}