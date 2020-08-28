import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { IExerciseCommentRepository } from "./exercise.comment.interface.repository";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";
import { GenericMultipleApiResponseModel } from "../../models/generic.multiple.api.response.model";

@Injectable()
export class ExerciseCommentHttpRepository implements IExerciseCommentRepository {

    private readonly API_ADDRESS = `${GymApiConfig.baseUrl}/exercisecomment/?status=2&language=2`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExerciseCommentByExerciseId(id: number) {
        const endpoint = `${this.API_ADDRESS}&exercise=${id}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericMultipleApiResponseModel<ExerciseCommentApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

}