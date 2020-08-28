import { Injectable } from '@angular/core';
import { GymSheetModel } from '../../models/gym.sheet.model';
import { GymSheetFirebaseRepository } from '../../repositories/gym.sheet/gym.sheet.firebase.repository';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { ClientModel } from '../../models/client.model';
import { ExerciseFirebaseModel } from '../../models/exercise.firebase.model';

@Injectable()
export class ClientProvider {

  constructor(
    private readonly clientFirebaseRepository: ClientFirebaseRepository,
    private readonly gymSheetFirebaseRepository: GymSheetFirebaseRepository
  ) { }

  async saveClientGymSheet(client: ClientModel, gymSheet: GymSheetModel) {
    const gymSheetDocumentReference = await this.gymSheetFirebaseRepository.saveUserGymSheet(gymSheet);
    client.gymSheetId = gymSheetDocumentReference.id;
    await this.clientFirebaseRepository.saveClienInfos(client);
  }

  async getClientGymSheet(gymSheetId: string): Promise<GymSheetModel> {
    const gymSheetFirebase = await this.gymSheetFirebaseRepository.getGymSheetById(gymSheetId);
    const gymSheetArrays: Array<Array<string>> = JSON.parse(gymSheetFirebase.map);
    const gymSheet: GymSheetModel = new GymSheetModel();
    gymSheet.id = gymSheetFirebase.id;
    gymSheet.exercisesList = new Map<string, Map<number, ExerciseFirebaseModel>>();
    gymSheetArrays.forEach(x => {
      const internalMap: Map<number, ExerciseFirebaseModel> =
        new Map<number, ExerciseFirebaseModel>();
      const exercise: Array<any> = JSON.parse(x[1]);
      exercise.forEach(y => {
        internalMap.set(y[0], y[1]);
      });
      gymSheet.exercisesList.set(x[0], internalMap);
    });
    return gymSheet;
  }

}
