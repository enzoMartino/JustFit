import { ReviewModel } from "../../models/review.model";

export interface IReviewRepository {
    getReviewsByUserId(id: string): Promise<ReviewModel[]>;
}