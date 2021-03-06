import { IClientRepository } from "./client.interface.repository";
import { AngularFirestore } from 'angularfire2/firestore';
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { Injectable } from "@angular/core";
import { ClientModel } from "../../models/client.model";
import { BaseFirebaseRepository } from "../base.firebase.repository";

@Injectable()
export class ClientFirebaseRepository implements IClientRepository {

    private _collectionName: EnumDbCollectionNames;
    get collectionName(): EnumDbCollectionNames {
        return this._collectionName;
    }
    set collectionName(val: EnumDbCollectionNames) {
        this._collectionName = val;
        if (this._collectionName !== undefined) {
            this.collectionReference = this.firestore.collection(this.collectionName).ref;
        }
    }

    private _collectionReference: firebase.firestore.CollectionReference;
    get collectionReference(): firebase.firestore.CollectionReference {
        return this._collectionReference;
    }
    set collectionReference(val: firebase.firestore.CollectionReference) {
        this._collectionReference = val;
    }

    constructor(
        private readonly firestore: AngularFirestore,
        private readonly baseFirebaseRepository: BaseFirebaseRepository
    ) {
        this.collectionName = EnumDbCollectionNames.CLIENTS;
    }

    async getClientsByPersonalTrainerId(id: string): Promise<ClientModel[]> {
        let clients: ClientModel[] = [];
        let querySnapshot = await this.collectionReference.where("personalTrainerId", "==", id).get();
        querySnapshot.docs.forEach(x => {
            const client = x.data() as ClientModel;
            client.id = x.id;
            clients.push(client);
        });
        return clients;
    }

    async saveClienInfos(client: ClientModel) {
        return this.baseFirebaseRepository.saveDocument<ClientModel>(client,
            this.collectionReference);
    }

}