import { PersonalTrainerFirebaseRepository } from './../repositories/personal.trainer/personal.trainer.firebase.repository';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore, FirestoreSettingsToken } from 'angularfire2/firestore';
import { firebaseConfig } from '../models/common/firebase-config';
import { AngularFireAuth } from 'angularfire2/auth';
import { SessionProvider } from '../providers/session/session.provider';
import { AuthProvider } from '../providers/auth-provider/auth.provider';
import { AlertProvider } from '../providers/alert/alert.provider';
import { BaseFirebaseRepository } from '../repositories/base.firebase.repository';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireAuth,
    SessionProvider,
    AuthProvider,
    AlertProvider,
    BaseFirebaseRepository,
    PersonalTrainerFirebaseRepository
  ]
})
export class AppModule { }
