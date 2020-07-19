import { Injectable } from "@angular/core";

@Injectable()
export class BaseFirebaseRepository {

  constructor() { }

  async saveDocument<T>(object: T, collectionReference: firebase.firestore.CollectionReference) {
    try {
      let obj: any = Object.assign({}, object);
      let documentReference: firebase.firestore.DocumentReference;
      if (obj.id) {
        documentReference = collectionReference.doc(obj.id);
        const documentSnapshot = await documentReference.get();
        if (documentSnapshot.exists) {
          await documentReference.set(obj);
        } else {
          documentReference = await collectionReference.add(obj);
        } 
      } else {
        obj.id = null;
        documentReference = await collectionReference.add(obj);
      }
      return documentReference;
    } catch (error) {
      throw error;
    }
  }

}
