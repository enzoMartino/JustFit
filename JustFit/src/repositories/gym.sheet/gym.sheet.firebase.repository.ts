import { IGymSheetRepository } from "./gym.sheet.interface.repository";
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";

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
        private readonly firestore: AngularFirestore
    ) {
        this.collectionName = EnumDbCollectionNames.GYM_SHEETS;
    }
    
}