import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import { firebaseConfig } from '../../models/common/firebase-config';

@Injectable()
export class AuthProvider {

  ui: firebaseui.auth.AuthUI;

  constructor() {
    // Initialize the FirebaseUI Widget using Firebase.
    firebase.initializeApp(firebaseConfig);
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }

  public static getUiConfig() {
    // FirebaseUI config.
    return {
      callbacks: {
        signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
          const user = authResult.user;
          const isNewUser = authResult.additionalUserInfo.isNewUser;

          // initialize new user
          if (isNewUser) {
            // do initialization stuff here (ex. create profile)
            return false;
          }

          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account'
          }
        }, {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: [
            'public_profile',
            'email'
          ]
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    };
  }

}