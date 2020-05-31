import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";
import { IExerciseCommentRepository } from "./exercise.comment.interface.repository";
import { ExerciseCommentApiModel } from "../../models/exercise.comment.api.model";

@Injectable()
export class ExerciseCommentHttpRepository implements IExerciseCommentRepository {

    private readonly API_ADDRESS = `${GymApiConfig.baseUrl}/exercisecomment/?status=2&language=2`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExerciseCommentByExerciseId(id: number) {
        const endpoint = `${this.API_ADDRESS}&exercise=${id}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericApiResponseModel<ExerciseCommentApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

}