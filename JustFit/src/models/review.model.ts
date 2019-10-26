import { PersonalTrainerModel } from "./personal.trainer.model";
import { ClientModel } from "./client.model";

export class ReviewModel {
    title: string;
    description: string;
    rate: number;
    reviewer: ClientModel;
    reviewee: PersonalTrainerModel;
}