import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { ExerciseApiModel } from "../../models/exercise.api.model";
import { IExerciseRepository } from "./exercise.interface.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

@Injectable()
export class ExerciseHttpRepository implements IExerciseRepository {

    private readonly BASE_API_ADDRESS = `${GymApiConfig.baseUrl}/exercise/`;
    private readonly BASE_QUERY_PARAMETERS = `?language=2&status=2`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExercises(page: number = 1) {
        const endpoint = `${this.BASE_API_ADDRESS}${this.BASE_QUERY_PARAMETERS}&page=${page}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericMultipleApiResponseModel<ExerciseApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

    retrieveExercisesByCategoryId(id: number, page: number = 1) {
        const endpoint = `${this.BASE_API_ADDRESS}${this.BASE_QUERY_PARAMETERS}&category=${id}&page=${page}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericMultipleApiResponseModel<ExerciseApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

    retrieveExerciseById(id: number) {
        const endpoint = `${this.BASE_API_ADDRESS}${id}/`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<ExerciseApiModel>(endpoint,
                GymApiConfig.httpHeaders);
    }

}