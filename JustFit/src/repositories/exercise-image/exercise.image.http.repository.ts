import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { IExerciseImageRepository } from "./exercise.image.interface.repository";
import { ExerciseImageApiModel } from "../../models/exercise.image.api.model";

@Injectable()
export class ExerciseImageHttpRepository implements IExerciseImageRepository {

    private readonly API_ADDRESS = `${GymApiConfig.baseUrl}/exerciseimage/?status=2`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExerciseImageByExerciseId(id: number) {
        const endpoint = `${this.API_ADDRESS}&exercise=${id}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<Array<ExerciseImageApiModel>>(endpoint,
                GymApiConfig.httpHeaders);
    }

}