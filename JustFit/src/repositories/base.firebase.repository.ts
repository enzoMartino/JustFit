import { Injectable } from "@angular/core";

@Injectable()
export class BaseFirebaseRepository {

  constructor() { }

  async addDocument<T>(objcet: T, collectionReference: firebase.firestore.CollectionReference) {
    try {
      let obj = Object.assign({}, objcet);
      await collectionReference.add(obj);
    } catch (error) {
      throw error;
    }
  }
}
