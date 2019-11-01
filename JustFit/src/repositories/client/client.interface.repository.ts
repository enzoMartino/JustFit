import { ClientModel } from "../../models/client.model";

export interface IClientRepository {
    addClient(client: ClientModel): Promise<void>;
    retrieveClientById(id: string): Promise<ClientModel>;
}