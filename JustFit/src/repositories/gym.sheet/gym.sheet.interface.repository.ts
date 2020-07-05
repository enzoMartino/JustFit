import { GymSheetModel } from "../../models/gym.sheet.model";

export interface IGymSheetRepository {
    saveUserGymSheet(gymSheet: GymSheetModel): Promise<firebase.firestore.DocumentReference>;
    getGymSheetById(id: string): Promise<GymSheetModel>;
}