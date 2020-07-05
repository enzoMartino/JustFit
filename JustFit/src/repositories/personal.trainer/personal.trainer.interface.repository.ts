import { PersonalTrainerModel } from "../../models/personal.trainer.model";

export interface IPersonalTrainerRepository {
    addPersonalTrainer(personalTrainer: PersonalTrainerModel): Promise<firebase.firestore.DocumentReference>;
    retrievePersonalTrainerById(id: string): Promise<PersonalTrainerModel>;
}