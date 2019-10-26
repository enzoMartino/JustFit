import 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import FirebaseAuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthProvider {

  constructor(
    public readonly afAuth: AngularFireAuth
  ) { }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  signInWithGoogle(): any {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: FirebaseAuthProvider): any {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let token = JSON.stringify(result);
            // The signed-in user info.
            let user = result.user;
            console.log(token, user);
          }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }

}