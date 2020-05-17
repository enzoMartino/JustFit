import { PersonModel } from "./person.model";
import { EnumPersonTypes } from "./enum.person.types";

export class ClientModel extends PersonModel {
    personalTrainerId: string;
    gymSheetId: string;

    constructor(id: string, email: string, type: EnumPersonTypes) {
        super(id, email, type);
    }
}