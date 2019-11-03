import { IClientRepository } from "./client.interface.repository";
import { ClientModel } from "../../models/client.model";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable, OnInit } from "@angular/core";
import { EnumErrors } from "../../models/enum.errors";
import { UserFirebaseRepository } from "../person.firebase.repository";
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";

@Injectable()
export class ClientFirebaseRepository
    extends UserFirebaseRepository
    implements IClientRepository, OnInit {

    ngOnInit(): void {
        this.collectionName = EnumDbCollectionNames.CLIENTS;
    }

    async addClient(personalTrainer: ClientModel): Promise<void> {
        await this.addUser<ClientModel>(personalTrainer);
    }

    async retrieveClientById(id: string): Promise<ClientModel> {
        return await this.retrieveUserById<ClientModel>(id);
    }
}