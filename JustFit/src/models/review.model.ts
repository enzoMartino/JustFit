import { PersonalTrainerModel } from "./personal.trainer.model";
import { ClientModel } from "./client.model";
import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";

export class ReviewModel extends BaseFirebaseCollectionModel {
    title: string;
    description: string;
    rate: number;
    reviewer: ClientModel;
    reviewee: PersonalTrainerModel;
}