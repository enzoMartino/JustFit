import { IReviewRepository } from "./review.interface.repository";
import { AngularFirestore } from 'angularfire2/firestore';
import { ReviewModel } from "../../models/review.model";

export class ReviewFirebaseRepository implements IReviewRepository {

    private readonly collectionName = "/reviews";
    private readonly collectionReference: firebase.firestore.CollectionReference;

    constructor(db: AngularFirestore) {
        this.collectionReference = db.collection(this.collectionName).ref;
    }

    async getReviewsByUserId(id: string): Promise<ReviewModel[]> {
        let reviews: ReviewModel[] = [];
        let querySnapshot = await this.collectionReference.where("reviewee", "==", id).get();
        console.log(querySnapshot);
        return reviews;
    }

}