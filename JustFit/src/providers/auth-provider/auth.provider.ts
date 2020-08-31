import { PersonalTrainerModel } from './../../models/personal.trainer.model';
import 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import FirebaseAuthProvider = firebase.auth.AuthProvider;
import { EnumPersonTypes } from '../../models/enum.person.types';
import { SessionProvider } from '../session/session.provider';
import { PersonalTrainerFirebaseRepository } from '../../repositories/personal.trainer/personal.trainer.firebase.repository';
import { GoogleProfileModel } from '../../models/google.profile.model';

@Injectable()
export class AuthProvider {

  constructor(
    public readonly afAuth: AngularFireAuth,
    private readonly sessionProvider: SessionProvider,
    private readonly personalTrainerFirebaseRepository: PersonalTrainerFirebaseRepository
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
        .then(result => this.handleNewGoogleUser(result))
        .catch(error => { throw error; });
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult()
            .then(result => this.handleNewGoogleUser(result))
            .catch(error => { throw error; });
        });
    }
  }

  private async handleNewUser(result: firebase.auth.UserCredential) {
    this.sessionProvider.firebaseUser = result.user;
    if (result.additionalUserInfo.isNewUser) {
      let personalTrainer = new PersonalTrainerModel(result.user.uid, result.user.email,
        EnumPersonTypes.PERSONAL_TRAINER);
      this.sessionProvider.loggedPersonaltrainer = personalTrainer;
      this.personalTrainerFirebaseRepository.addPersonalTrainer(personalTrainer)
        .then(() => this.sessionProvider.loggedPersonaltrainer = personalTrainer)
        .catch(error => { throw error; });
    }
  }

  private async handleNewGoogleUser(result: firebase.auth.UserCredential) {
    this.sessionProvider.firebaseUser = result.user;
    if (result.additionalUserInfo.isNewUser) {
      let personalTrainer = new PersonalTrainerModel(result.user.uid, result.user.email,
        EnumPersonTypes.PERSONAL_TRAINER);
      const googleUser: GoogleProfileModel = result.additionalUserInfo.profile as GoogleProfileModel;
      personalTrainer.name = googleUser.given_name;
      personalTrainer.surname = googleUser.family_name;
      personalTrainer.picture = googleUser.picture;
      this.sessionProvider.loggedPersonaltrainer = personalTrainer;
      this.personalTrainerFirebaseRepository.addPersonalTrainer(personalTrainer)
        .then(() => this.sessionProvider.loggedPersonaltrainer = personalTrainer)
        .catch(error => { throw error; });
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

}
