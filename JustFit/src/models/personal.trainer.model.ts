import { PersonModel } from "./person.model";
import { ClientModel } from "./client.model";

export class PersonalTrainerModel extends PersonModel {
    clientsList: ClientModel[] = [];
}