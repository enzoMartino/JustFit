import { ClientModel } from "../../models/client.model";

export interface IClientRepository {
    getClientsByPersonalTrainerId(id: string): Promise<ClientModel[]>;
    saveClienInfos(client: ClientModel): Promise<firebase.firestore.DocumentReference>;
}