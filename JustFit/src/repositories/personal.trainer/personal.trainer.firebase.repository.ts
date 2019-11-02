import { IPersonalTrainerRepository } from "./personal.trainer.interface.repository";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { PersonalTrainerModel } from "../../models/personal.trainer.model";
import { EnumErrors } from "../../models/enum.errors";

@Injectable()
export class PersonalTrainerFirebaseRepository implements IPersonalTrainerRepository {

    private readonly collectionName = "/personalTrainers";
    private readonly collectionReference: firebase.firestore.CollectionReference;

    constructor(
        readonly firestore: AngularFirestore
    ) {
        this.collectionReference = firestore.collection(this.collectionName).ref;
    }

    async addPersonalTrainer(personalTrainer: PersonalTrainerModel): Promise<void> {
        try {
            //he Web client library does not support custom objects instantiated with new...()
            let obj = Object.assign({}, personalTrainer);
            await this.collectionReference.add(obj);
        } catch (error) {
            throw error;
        }
    }

    async retrievePersonalTrainerById(id: string): Promise<PersonalTrainerModel> {
        try {
            const result = await this.collectionReference.where("id", "==", id).get();
            this.handleRetrievePersonalTrainerByIdErrors(result);
            return this.handleRetrievePersonalTrainerByIdResult(result);
        } catch (error) {
            throw error;
        }
    }

    private handleRetrievePersonalTrainerByIdErrors(result: firebase.firestore.QuerySnapshot) {
        if (result.docs.length === 0) {
            throw EnumErrors.NO_PERSONAL_TRAINER_ERROR;
        } else if (result.docs.length > 1) {
            throw EnumErrors.MULTIPLE_PERSONAL_TRAINER_ERROR;
        }
    }

    private handleRetrievePersonalTrainerByIdResult(result: firebase.firestore.QuerySnapshot)
        : PersonalTrainerModel {
        const client = result.docs[0].data() as PersonalTrainerModel;
        return client;
    }
}