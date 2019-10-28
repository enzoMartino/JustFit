import { IClientRepository } from "./client.interface.repository";
import { ClientModel } from "../../models/client.model";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";

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
}