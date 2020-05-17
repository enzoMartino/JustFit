import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { HttpHeaders } from "@angular/common/http";
import { ExerciseApiModel } from "../../models/exercise.api.model";
import { IExerciseRepository } from "./exercise.interface.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { GenericApiResponseModel } from "../../models/generic.api.response.model";
import { map } from "rxjs/operators";

@Injectable()
export class ExerciseHttpRepository implements IExerciseRepository {

    private readonly BASE_API_ADDRESS = "https://wger.de/api/v2/exercise/?language=2&status=2&limit=200";

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveExercises() {
        let headers = new HttpHeaders({});
        headers = headers.set("Authorization", GymApiConfig.apiKey);
        return this.baseHttpRepository
            .makeGetRequestWithCache<GenericApiResponseModel<ExerciseApiModel>>(this.BASE_API_ADDRESS,
                headers).pipe(map(x => x.results));
    }

}