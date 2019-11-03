import { Injectable } from "@angular/core";
import { EnumDbCollectionNames } from "../models/enum.db.colletionsNames";
import { AngularFirestore } from "angularfire2/firestore";
import undefined from "firebase/empty-import";

@Injectable()
export abstract class BaseFirebaseRepository {

    private _collectionName: EnumDbCollectionNames;
    get collectionName(): EnumDbCollectionNames {
        return this._collectionName;
    }
    set collectionName(val: EnumDbCollectionNames) {
        this._collectionName = val;
        if (this.collectionName === undefined) {
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
    ) { }

    async addDocument<T>(objcet: T) {
        try {
            let obj = Object.assign({}, objcet);
            await this.collectionReference.add(obj);
        } catch (error) {
            throw error;
        }
    }
}