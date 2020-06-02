import { Injectable } from "@angular/core";
import { BaseHttpRepository } from "../base.http.repository";
import { GymApiConfig } from "../../models/gym.api.config";
import { IEquipmentRepository } from "./equipment.interface.repository";
import { EquipmentApiModel } from "../../models/equipment.api.model";

@Injectable()
export class EquipmentHttpRepository implements IEquipmentRepository {

    private readonly API_ADDRESS = `${GymApiConfig.baseUrl}/equipment/`;

    constructor(
        private readonly baseHttpRepository: BaseHttpRepository
    ) { }

    retrieveEquipmentById(id: number) {
        const endpoint = `${this.API_ADDRESS}${id}/`;
        return this.baseHttpRepository
            .makeGetRequestWithCache<EquipmentApiModel>(endpoint,
                GymApiConfig.httpHeaders);
    }

}