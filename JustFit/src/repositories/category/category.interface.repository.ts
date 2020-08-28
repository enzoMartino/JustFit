import { Observable } from "rxjs";
import { CategoryApiModel } from "../../models/category.api.model";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

export interface ICategoryRepository {
    retrieveExercisesCategories(): Observable<GenericMultipleApiResponseModel<CategoryApiModel>>;
}