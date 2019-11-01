import 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import FirebaseAuthProvider = firebase.auth.AuthProvider;
import { ClientModel } from '../../models/client.model';
import { EnumPersonTypes } from '../../models/enum.person.types';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { SessionProvider } from '../session/session.provider';

@Injectable()
export class AuthProvider {

  constructor(
    public readonly afAuth: AngularFireAuth,
    private readonly clientFirebaseRepository: ClientFirebaseRepository,
    private readonly sessionProvider: SessionProvider
  ) { }

  async signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password)
      .then(result => this.handleNewUser(result))
      .catch(error => { throw error; });
  }

  async signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,
      credentials.password)
      .then(result => this.handleNewUser(result))
      .catch(error => { throw error; });
  }

  async signInWithGoogle() {
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private async oauthSignIn(provider: FirebaseAuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then(result => this.handleNewUser(result))
        .catch(error => { throw error; });
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult()
            .then(result => this.handleNewUser(result))
            .catch(error => { throw error; });
        });
    }
  }

  private async handleNewUser(result: firebase.auth.UserCredential) {
    if (result.additionalUserInfo.isNewUser) {
      let client = new ClientModel(result.user.uid, result.user.email, EnumPersonTypes.CLIENT);
      this.clientFirebaseRepository.addClient(client)
        .then(() => this.sessionProvider.loggedClient = client)
        .catch(error => { throw error; });
    }
  }

}