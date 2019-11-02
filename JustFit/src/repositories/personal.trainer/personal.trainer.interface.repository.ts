import { PersonalTrainerModel } from "../../models/personal.trainer.model";

export interface IPersonalTrainerRepository {
    addPersonalTrainer(personalTrainer: PersonalTrainerModel): Promise<void>;
    retrievePersonalTrainerById(id: string): Promise<PersonalTrainerModel>;
}