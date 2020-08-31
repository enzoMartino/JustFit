import { IPersonalTrainerRepository } from "./personal.trainer.interface.repository";
import { Injectable } from "@angular/core";
import { PersonalTrainerModel } from "../../models/personal.trainer.model";
import { EnumDbCollectionNames } from "../../models/enum.db.colletionsNames";
import { AngularFirestore } from "angularfire2/firestore";
import { BaseFirebaseRepository } from "../base.firebase.repository";
import { EnumErrors } from "../../models/enum.errors";

@Injectable()
export class PersonalTrainerFirebaseRepository implements IPersonalTrainerRepository {

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
    private readonly firestore: AngularFirestore,
    private readonly baseFirebaseRepository: BaseFirebaseRepository
  ) {
    this.collectionName = EnumDbCollectionNames.PERSONAL_TRAINERS;
  }

  async deletePersonalTrainerById(id: string): Promise<boolean> {
    try {
      const result = await this.collectionReference.where("id", "==", id).get();
      for (let i = 0; i < result.docs.length; i++) {
        await result.docs[i].ref.delete();
      }
    } catch (error) {
      throw error;
    }
    return true
  }

  async addPersonalTrainer(personalTrainer: PersonalTrainerModel): Promise<firebase.firestore.DocumentReference> {
    return this.baseFirebaseRepository.saveDocument<PersonalTrainerModel>(personalTrainer,
      this.collectionReference);
  }

  async retrievePersonalTrainerById(id: string): Promise<PersonalTrainerModel> {
    return await this.retrieveUserById<PersonalTrainerModel>(id);
  }

  private async retrieveUserById<T>(id: string): Promise<T> {
    try {
      const result = await this.collectionReference.where("id", "==", id).get();
      this.handleRetrieveUserByIdErrors(result);
      return this.handleRetrieveUserByIdResult(result);
    } catch (error) {
      throw error;
    }
  }

  private handleRetrieveUserByIdErrors(result: firebase.firestore.QuerySnapshot) {
    if (result.docs.length === 0) {
      throw EnumErrors.NO_USER_ERROR;
    } else if (result.docs.length > 1) {
      throw EnumErrors.MULTIPLE_USERS_ERROR;
    }
  }

  private handleRetrieveUserByIdResult<T>(result: firebase.firestore.QuerySnapshot): T {
    const user = result.docs[0].data() as T;
    return user;
  }
}
