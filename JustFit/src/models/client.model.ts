import { PersonModel } from "./person.model";
import { PersonalTrainerModel } from "./personal.trainer.model";
import { GymSheetModel } from "./gym.sheet.model";

export class ClientModel extends PersonModel {
    personalTrainer: PersonalTrainerModel;
    gymSheet: GymSheetModel;
}