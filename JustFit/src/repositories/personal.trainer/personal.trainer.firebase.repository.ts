import { IPersonalTrainerRepository } from "./personal.trainer.interface.repository";
import { Injectable, OnInit } from "@angular/core";
import { PersonalTrainerModel } from "../../models/personal.trainer.model";
import { EnumErrors } from "../../models/enum.errors";
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { UserFirebaseRepository } from "../person.firebase.repository";

@Injectable()
export class PersonalTrainerFirebaseRepository
    extends UserFirebaseRepository
    implements IPersonalTrainerRepository, OnInit {

    ngOnInit(): void {
        this.collectionName = EnumDbCollectionNames.PERSONAL_TRAINERS;
    }

    async addPersonalTrainer(personalTrainer: PersonalTrainerModel): Promise<void> {
        await this.addUser<PersonalTrainerModel>(personalTrainer);
    }

    async retrievePersonalTrainerById(id: string): Promise<PersonalTrainerModel> {
        return await this.retrieveUserById<PersonalTrainerModel>(id);
    }
}