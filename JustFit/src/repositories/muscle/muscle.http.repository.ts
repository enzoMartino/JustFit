import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { MuscleApiModel } from "../../models/muscle.api.model";
import { IMuscleRepository } from "./muscle.interface.repository";

@Injectable()
export class MuscleHttpRepository implements IMuscleRepository {

    private readonly API_ADDRESS = `${GymApiConfig.baseUrl}/muscle/`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveMuscleById(id: number) {
        const endpoint = `${this.API_ADDRESS}${id}`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<MuscleApiModel>(endpoint,
                GymApiConfig.httpHeaders);
    }

}