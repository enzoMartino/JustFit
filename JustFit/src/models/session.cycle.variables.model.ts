import { PersonalTrainerModel } from "./personal.trainer.model";
import { ClientModel } from "./client.model";

export class SessionCycleVariablesModel {
    loggedUser: PersonalTrainerModel | ClientModel;
}