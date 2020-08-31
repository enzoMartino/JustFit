import { ReviewModel } from "../../models/review.model";

export interface IReviewRepository {
    getReviewsByUserId(id: string): Promise<ReviewModel[]>;
    deleteReviewsByPersonalTrainerById(id: string): Promise<boolean>;
}