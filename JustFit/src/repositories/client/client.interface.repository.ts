import { ClientModel } from "../../models/client.model";

export interface IClientRepository {
    addClient(client: ClientModel): Promise<void>;
}