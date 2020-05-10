import { EnumPersonTypes } from "./enum.person.types";
import { BaseFirebaseCollectionModel } from "./base.firebase.collection.model";

export class PersonModel extends BaseFirebaseCollectionModel {
    name: string;
    surname: string;
    age: string;
    email: string;
    phone: number;
    address: string;
    type: EnumPersonTypes;
    picture: string;

    constructor(id: string, email: string, type: EnumPersonTypes) {
        super(id);
        this.email = email;
        this.type = type;
    }
}