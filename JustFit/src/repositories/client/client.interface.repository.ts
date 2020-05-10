import { ClientModel } from "../../models/client.model";

export interface IClientRepository {
    getClientsByPersonalTrainerId(id: string): Promise<ClientModel[]>;
}