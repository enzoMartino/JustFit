import { Injectable } from '@angular/core';
import { GymSheetModel } from '../../models/gym.sheet.model';
import { GymSheetFirebaseRepository } from '../../repositories/gym.sheet/gym.sheet.firebase.repository';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { ClientModel } from '../../models/client.model';

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

}
