import { IGymSheetRepository } from "./gym.sheet.interface.repository";
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { BaseFirebaseRepository } from "../base.firebase.repository";
import { GymSheetModel } from "../../models/gym.sheet.model";
import { EnumErrors } from "../../models/enum.errors";

@Injectable()
export class GymSheetFirebaseRepository implements IGymSheetRepository {
    private _collectionName: EnumDbCollectionNames;
    get collectionName(): EnumDbCollectionNames {
        return this._collectionName;
    }
    set collectionName(val: EnumDbCollectionNames) {
        this._collectionName = val;
        if (this._collectionName !== undefined) {
            this.collectionReference = this.firestore.collection(this.collectionName).ref;
        }
    }

    private _collectionReference: firebase.firestore.CollectionReference;
    get collectionReference(): firebase.firestore.CollectionReference {
        return this._collectionReference;
    }
    set collectionReference(val: firebase.firestore.CollectionReference) {
        this._collectionReference = val;
    }

    constructor(
        private readonly firestore: AngularFirestore,
        private readonly baseFirebaseRepository: BaseFirebaseRepository
    ) {
        this.collectionName = EnumDbCollectionNames.GYM_SHEETS;
    }

    saveUserGymSheet(gymSheet: GymSheetModel) {
        return this.baseFirebaseRepository.saveDocument<GymSheetModel>(gymSheet,
            this.collectionReference);
    }

    async getGymSheetById(id: string) {
        try {
            const result = await this.collectionReference.doc(id).get();
            this.handleRetrieveUserByIdErrors(result);
            return this.handleRetrieveUserByIdResult(result);
        } catch (error) {
            throw error;
        }
    }

    private handleRetrieveUserByIdErrors(result: firebase.firestore.DocumentSnapshot) {
        if (!result.exists) {
            throw EnumErrors.NO_GYM_SHEET_FOUND_ERROR;
        }
    }

    private handleRetrieveUserByIdResult(result: firebase.firestore.DocumentSnapshot): GymSheetModel {
        const gymSheet = result.data() as GymSheetModel;
        gymSheet.id = result.id;
        return gymSheet;
    }

}