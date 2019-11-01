import { IClientRepository } from "./client.interface.repository";
import { ClientModel } from "../../models/client.model";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { EnumErrors } from "../../models/enum.errors";

@Injectable()
export class ClientFirebaseRepository implements IClientRepository {

    private readonly collectionName = "/clients";
    private readonly collectionReference: firebase.firestore.CollectionReference;

    constructor(
        readonly firestore: AngularFirestore
    ) {
        this.collectionReference = firestore.collection(this.collectionName).ref;
    }

    async addClient(client: ClientModel): Promise<void> {
        try {
            //he Web client library does not support custom objects instantiated with new...()
            let obj = Object.assign({}, client);
            await this.collectionReference.add(obj);
        } catch (error) {
            throw error;
        }
    }

    async retrieveClientById(id: string): Promise<ClientModel> {
        try {
            const result = await this.collectionReference.where("id", "==", id).get();
            this.handleRetrieveClientByIdErrors(result);
            return this.handleRetrieveClientByIdResult(result);
        } catch (error) {
            throw error;
        }
    }

    private handleRetrieveClientByIdErrors(result: firebase.firestore.QuerySnapshot) {
        if (result.docs.length === 0) {
            throw EnumErrors.NO_CLIENT_FOUND_ERROR;
        } else if (result.docs.length > 1) {
            throw EnumErrors.MULTIPLE_CLIENTS_ERROR;
        }
    }

    private handleRetrieveClientByIdResult(result: firebase.firestore.QuerySnapshot)
        : ClientModel {
        const client = result.docs[0].data() as ClientModel;
        return client;
    }
}