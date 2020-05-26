import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { CategoryApiModel } from "../../models/category.api.model";
import { ICategoryRepository } from "./category.interface.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";
import { map } from "rxjs/operators";

@Injectable()
export class CategoryHttpRepository implements ICategoryRepository {

    private readonly BASE_API_ADDRESS = `${GymApiConfig.baseUrl}/exercisecategory/`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExercisesCategories() {
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericApiResponseModel<CategoryApiModel>>(this.BASE_API_ADDRESS,
                GymApiConfig.httpHeaders).pipe(map(x => x.results));
    }

}