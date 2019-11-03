import { Injectable } from "@angular/core";
import { BaseFirebaseRepository } from "./base.firebase.repository";
import { EnumErrors } from "../models/enum.errors";

@Injectable()
export class UserFirebaseRepository
    extends BaseFirebaseRepository {


    async addUser<T>(person: T): Promise<void> {
        return this.addDocument<T>(person);
    }

    async retrieveUserById<T>(id: string): Promise<T> {
        try {
            const result = await this.collectionReference.where("id", "==", id).get();
            this.handleRetrieveUserByIdErrors(result);
            return this.handleRetrieveUserByIdResult(result);
        } catch (error) {
            throw error;
        }
    }

    private handleRetrieveUserByIdErrors(result: firebase.firestore.QuerySnapshot) {
        if (result.docs.length === 0) {
            throw EnumErrors.NO_USER_ERROR;
        } else if (result.docs.length > 1) {
            throw EnumErrors.MULTIPLE_USERS_ERROR;
        }
    }

    private handleRetrieveUserByIdResult<T>(result: firebase.firestore.QuerySnapshot): T {
        const user = result.docs[0].data() as T;
        return user;
    }
}