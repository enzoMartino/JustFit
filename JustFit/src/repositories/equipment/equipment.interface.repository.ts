import { Observable } from "rxjs";
import { EquipmentApiModel } from "../../models/equipment.api.model";

export interface IEquipmentRepository {
    retrieveEquipmentById(id: number)
        : Observable<EquipmentApiModel>;
}