import { GymSheetModel } from "../../models/gym.sheet.model";
import { GymSheetFirebaseModel } from "../../models/gym.sheet.firebase.model";

export interface IGymSheetRepository {
    saveUserGymSheet(gymSheet: GymSheetModel): Promise<firebase.firestore.DocumentReference>;
    getGymSheetById(id: string): Promise<GymSheetFirebaseModel>;
}