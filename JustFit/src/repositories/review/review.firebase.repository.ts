import { IReviewRepository } from "./review.interface.repository";
import { ReviewModel } from "../../models/review.model";
import { AngularFirestore } from 'angularfire2/firestore';
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { Injectable } from "@angular/core";

@Injectable()
export class ReviewFirebaseRepository implements IReviewRepository {

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
        this.collectionName = EnumDbCollectionNames.REVIEWS;
    }

    async getReviewsByUserId(id: string): Promise<ReviewModel[]> {
        let reviews: ReviewModel[] = [];
        let querySnapshot = await this.collectionReference.where("reviewee", "==", id).get();
        querySnapshot.docs.forEach(x => {
            const review = x.data() as ReviewModel;
            reviews.push(review);
        });
        return reviews;
    }

}