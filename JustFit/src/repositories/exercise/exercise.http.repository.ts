import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { ExerciseApiModel } from "../../models/exercise.api.model";
import { IExerciseRepository } from "./exercise.interface.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";
import { map } from "rxjs/operators";

@Injectable()
export class ExerciseHttpRepository implements IExerciseRepository {

    private readonly BASE_API_ADDRESS = `${GymApiConfig.baseUrl}/exercise/?language=2&status=2`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExercises(page: number = 1) {
        const endpoint = `${this.BASE_API_ADDRESS}&page=${page}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericMultipleApiResponseModel<ExerciseApiModel>>(endpoint,
                GymApiConfig.httpHeaders).pipe(map(x => x.results));
    }

    retrieveExercisesByCategoryId(id: number, page: number = 1) {
        const endpoint = `${this.BASE_API_ADDRESS}&category=${id}&page=${page}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericMultipleApiResponseModel<ExerciseApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

}